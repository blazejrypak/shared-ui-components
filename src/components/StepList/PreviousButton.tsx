import { Button, Fade } from '@chakra-ui/react';
import React from 'react';
import { useStepList } from './StepList';

export const PreviousButton: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
}> = ({ children, onClick }) => {
    const { currentStep, goToPreviousStep } = useStepList();

    const handleOnClick = () => {
        onClick();
        goToPreviousStep();
    };

    return (
        <Fade in={currentStep !== 0}>
            <Button onClick={() => handleOnClick()}>{children}</Button>
        </Fade>
    );
};
