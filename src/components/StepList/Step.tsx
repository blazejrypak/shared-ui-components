import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';
import { useStepList } from './StepList';
import { StepProps } from './StepList.types';

export const Step: FC<StepProps> = ({
    children,
    component,
    isActive,
    displayPreviousButton = true,
    displayNextButton = true,
    previousButtonText,
    nextButtonText,
    onClickPrevious,
    onClickNext
}) => {
    const { goToNextStep, goToPreviousStep } = useStepList();
    if (isActive === false) return null;
    return (
        <Flex flexDir="column" justifyContent={'space-between'} height={'100%'}>
            <Box>
                {component
                    ? React.createElement(component)
                    : React.Children.map(children, (child) => {
                          return React.cloneElement(child as React.ReactElement, {
                              goToNextStep,
                              goToPreviousStep
                          });
                      })}
            </Box>
            <Flex justifyContent={'space-between'} my="2rem">
                {displayPreviousButton && (
                    <PreviousButton
                        onClick={onClickPrevious ? onClickPrevious : () => {}}
                    >
                        {previousButtonText ? previousButtonText : 'Previous'}
                    </PreviousButton>
                )}
                {displayNextButton && (
                    <NextButton onClick={onClickNext ? onClickNext : () => {}}>
                        {nextButtonText ? nextButtonText : 'Next'}
                    </NextButton>
                )}
            </Flex>
        </Flex>
    );
};