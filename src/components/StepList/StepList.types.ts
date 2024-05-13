export type StepListContextProps = {
  currentStep: number;
  totalSteps: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
};

export type StepListProps = {
  children: React.ReactNode;
};

export type StepProps = {
  children: React.ReactNode;
  component?: any;
  isActive?: boolean;
  previousButtonText?: string;
  nextButtonText?: string;
  displayPreviousButton?: boolean;
  displayNextButton?: boolean;
  onClickPrevious?: () => void;
  onClickNext?: () => void;
};
