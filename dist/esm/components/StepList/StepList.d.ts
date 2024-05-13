import React, { FC } from "react";
import { StepListContextProps, StepListProps, StepProps } from "./StepList.types";
export declare const StepListContext: React.Context<StepListContextProps>;
export declare const useStepList: () => StepListContextProps;
declare const StepList: FC<StepListProps> & {
    Step: FC<StepProps>;
};
export default StepList;
