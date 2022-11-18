import { Meta, Story } from "@storybook/react";
import Post from "./Post";
import { PostProps } from "./Post";

export default {
  title: "Post",
  component: Post,
} as Meta<PostProps>;
const Template: Story<PostProps> = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: "/images/postimg.png",
  subject: "LIFESTYLE",
  title: "The perfect weekend getaway",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  img: "",
  subject: "LIFESTYLE",
  title: "The perfect weekend getaway",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  img: "/images/postimg.png",
  subject: "LIFESTYLE",
  title:
    "This is a long title This is a long This is a long title This is a lon This is a long title This is a lon This is a long title This is a lon title This is a long title This is a long title",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  img: "/images/postimg.png",
  subject: "LIFESTYLE",
  title: "Short Title",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const EmptyDescription = Template.bind({});
EmptyDescription.args = {
  img: "/images/postimg.png",
  subject: "PHOTODIARY",
  title: "Title",
  description: "",
};