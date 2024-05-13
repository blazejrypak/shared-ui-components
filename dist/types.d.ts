import { FC } from 'react';

type StepListProps = {
    children: React.ReactNode;
};
type StepProps = {
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

declare const StepList: FC<StepListProps> & {
    Step: FC<StepProps>;
};

export { StepList as default };
