import { Meta, StoryFn } from "@storybook/react";
import { Step } from "../components/StepList/Step";

export default {
  title: "Design System/StepList/Step",
  component: Step,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} as Meta<typeof Step>;

const Template: StoryFn<typeof Step> = (args) => (
  <Step {...args}>{args.children}</Step>
);

export const StepTest = Template.bind({});
StepTest.args = {
  children: [<div>Step 1</div>],
  displayPreviousButton: true,
  displayNextButton: true,
  onClickPrevious: () => {},
  onClickNext: () => {},
  previousButtonText: "Previous",
  nextButtonText: "Next",
  component: undefined,
};
