import Header from "./Header";
import { withRouter } from "storybook-addon-react-router-v6";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta;

const Template: Story = (args) => <Header {...args} />;
export const Default = Template.bind({});
