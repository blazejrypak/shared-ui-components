import { Button, Fade } from '@chakra-ui/react';
import React from 'react';
import { useStepList } from './StepList';

export const NextButton: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
}> = ({ children, onClick }) => {
    const { currentStep, totalSteps, goToNextStep } = useStepList();

    const handleOnClick = () => {
        onClick();
        goToNextStep();
    };

    return (
        <Fade in={currentStep !== totalSteps - 1}>
            <Button variant={'next-button'} onClick={() => handleOnClick()}>
                {children}
            </Button>
        </Fade>
    );
};
