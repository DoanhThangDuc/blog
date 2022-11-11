import Header from "./Header";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;
export const Default = Template.bind({});
