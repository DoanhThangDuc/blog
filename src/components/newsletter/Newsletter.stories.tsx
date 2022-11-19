import { Meta, Story } from "@storybook/react";
import Newsletter from "./Newsletter";

export default {
  title: "Newsletter",
  component: Newsletter,
} as Meta<{ content: string; lable: string }>;

const Template: Story<{ content: string; lable: string }> = (args) => (
  <Newsletter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "Sign up for our newsletter!",
  lable: "Enter a valid email address",
};

export const NoContent = Template.bind({});
NoContent.args = {
  content: "",
  lable: "Enter a valid email address",
};

export const LongContent = Template.bind({});
LongContent.args = {
  content:
    "There is a very long content There is a very long content There is a very long content There is a very long content There is a very long content There is a very long content There is a very long content ",
  lable: "Enter a valid email address",
};
export const ShortContent = Template.bind({});
ShortContent.args = {
  content: "Short Content",
  lable: "Enter a valid email address",
};

export const Nolable = Template.bind({});
Nolable.args = {
  content: "Sign up for our newsletter!",
  lable: "",
};

export const ShortLable = Template.bind({});
ShortLable.args = {
  content: "Sign up for our newsletter!",
  lable: "Short",
};
export const LongLable = Template.bind({});
LongLable.args = {
  content: "Sign up for our newsletter!",
  lable:
    "There is a very long lable There is a very long lable There is a very long lable There is a very long lable There is a very long lable There is a very long lable There is a very long lable There is a very long lable ",
};
