import { Meta, Story } from "@storybook/react";
import Comment, { CommentProps } from "./Comment";

export default {
  title: "Comment",
  component: Comment,
} as Meta<CommentProps>;

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  numberComment: 2,
  src: "images/postimg.png",
  author: "John Doe",
  description:
    "Some comment Some comment Some comment Some comment Some commentSome comment Some comment Some comment Some comment Some commentSome comment Some comment Some comment",
};
export const NoNumberComment = Template.bind({});
NoNumberComment.args = {
  ...Default.args,
  numberComment: 0,
};
export const NoImage = Template.bind({});
NoImage.args = {
  ...Default.args,
  src: "",
};
export const NoAuthorName = Template.bind({});
NoAuthorName.args = {
  ...Default.args,
  author: "",
};
export const LongAuthorName = Template.bind({});
LongAuthorName.args = {
  ...Default.args,
  author:
    "A very long name A very long name A very long name A very long name A very long name A very long name ",
};
export const LongDescription = Template.bind({});
LongDescription.args = {
  ...Default.args,
  description:
    "There is a very long description There is a very long description There is a very long description There is a very long description There is a very long description There is a very long description There is a very long description There is a very long description There is a very long description There is a very long description ",
};
export const ShortDescription = Template.bind({});
ShortDescription.args = {
  ...Default.args,
  description: "short",
};
export const NoDesciption = Template.bind({});
NoDesciption.args = {
  ...Default.args,
  description: "",
};
