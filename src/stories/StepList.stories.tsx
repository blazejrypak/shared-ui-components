import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import StepList from "../components/StepList";

export default {
  title: "Design System/StepList",
  component: StepList,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} as Meta<typeof StepList>;

const Template: StoryFn<typeof StepList> = (args) => (
  <StepList>{args.children}</StepList>
);

export const StepListTest = Template.bind({});
StepListTest.args = {
  children: [
    <StepList.Step>
      <div>1</div>
    </StepList.Step>,
    <StepList.Step>
      <div>2</div>
    </StepList.Step>,
    <StepList.Step>
      <div>3</div>
    </StepList.Step>,
  ],
};
