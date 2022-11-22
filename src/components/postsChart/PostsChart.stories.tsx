import { Meta, Story } from "@storybook/react";
import PostsChart, { PostsChartProps } from "./PostsChart";

export default {
  title: "PostsChart",
  component: PostsChart,
} as Meta<PostsChartProps>;

const Template: Story<PostsChartProps> = (args) => <PostsChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "A day exploring the Apls",
  commentNumber: 24,
  src: "/images/banner.png",
};
export const LongTitle = Template.bind({});
LongTitle.args = {
  ...Default.args,
  title:
    "A day exploring the Apls A day exploring the Apls A day exploring the Apls A day exploring the Apls A day exploring the Apls ",
};
export const ShortTitle = Template.bind({});
ShortTitle.args = {
  ...Default.args,
  title: "Short Title",
};
export const NoTitle = Template.bind({});
NoTitle.args = {
  ...Default.args,
  title: "",
};
export const NoNumberOfComment = Template.bind({});
NoNumberOfComment.args = {
  ...Default.args,
  commentNumber: 0,
};
export const NoImg = Template.bind({});
NoImg.args = {
  ...Default.args,
  src: "",
};
