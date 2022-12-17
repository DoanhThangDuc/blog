import { Meta, Story } from "@storybook/react";
import { PostModal } from "../../features/PostsSlice";
import Post from "./Post";

export default {
  title: "Post",
  component: Post,
} as Meta<PostModal>;
const Template: Story<PostModal & { openDetails: (id: number) => void }> = (
  args
) => <Post post ={args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "/images/postimg.png",
  source: { id: "", name: "PHOTODIARY" },
  title: "The perfect weekend getaway",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  imageUrl: "",
  source: { id: "", name: "PHOTODIARY" },
  title: "The perfect weekend getaway",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  imageUrl: "/images/postimg.png",
  source: { id: "", name: "PHOTODIARY" },

  title:
    "This is a long title This is a long This is a long title This is a lon This is a long title This is a lon This is a long title This is a lon title This is a long title This is a long title",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  imageUrl: "/images/postimg.png",
  source: { id: "", name: "PHOTODIARY" },

  title: "Short Title",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const EmptyDescription = Template.bind({});
EmptyDescription.args = {
  imageUrl: "/images/postimg.png",
  source: { id: "", name: "PHOTODIARY" },
  title: "Title",
  description: "",
};
