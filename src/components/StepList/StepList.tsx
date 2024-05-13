import React, { FC, createContext, useState } from "react";
import {
    StepListContextProps,
    StepListProps,
    StepProps
} from "./StepList.types";
import { Step } from "./Step";

export const StepListContext = createContext<StepListContextProps>({
  currentStep: 0,
  totalSteps: 0,
  goToPreviousStep: () => {},
  goToNextStep: () => {},
});

export const useStepList = () => React.useContext(StepListContext);

const StepList: FC<StepListProps> & { Step: FC<StepProps> } = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, _setTotalSteps] = useState(
    React.Children.count(props.children)
  );

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child as React.ReactElement, {
      isActive: index === currentStep,
    });
  });

  return (
    <StepListContext.Provider
      value={{ currentStep, totalSteps, goToPreviousStep, goToNextStep }}
    >
      {children}
    </StepListContext.Provider>
  );
};

StepList.Step = Step;

export default StepList;
