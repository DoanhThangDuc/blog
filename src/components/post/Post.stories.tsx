import { Meta, Story } from "@storybook/react";
import Post from "./Post";
import { PostProps } from "./Post";

export default {
  title: "Post",
  component: Post,
} as Meta<PostProps>;
const Template: Story<PostProps> = (args) => <Post {...args} />;

export const Default = Template.bind({});
export const WithoutImage = Template.bind({});
WithoutImage.args = {
  img: "wrongurl",
  title: "",
  description: "",
};
export const LongTitle = Template.bind({});
LongTitle.args = {
  img: "",
  title:
    "This is a long title This is a long title This is a long title This is a long title",
  description: "",
};
export const ShortTitle = Template.bind({});
ShortTitle.args = {
  img: "",
  title: "Short Title",
  description: "",
};
export const EmptyDescription = Template.bind({});
EmptyDescription.args = {
  img: "",
  title: "Empty description",
  description: "empty",
};
