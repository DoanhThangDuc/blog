import { Meta, Story } from "@storybook/react";
import Post from "./Post";

export default {
  title: "Post",
  component: Post,
} as Meta;

const Template: Story = (args) => <Post {...args} />;

export const Default = Template.bind({});
