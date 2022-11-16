import { Meta, Story } from "@storybook/react";
import FirstPost from "./FirstPost";
import { PostProps } from "../components/post/Post";

export default {
  title: "First Post",
  component: FirstPost,
} as Meta<PostProps>;

const Template: Story<PostProps> = (args) => <FirstPost {...args} />;

export const Default = Template.bind({})

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

