import { FC } from 'react';
import { ThemeOverride } from '@chakra-ui/react';

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

declare const theme: ThemeOverride;

export { StepList as default, theme };
