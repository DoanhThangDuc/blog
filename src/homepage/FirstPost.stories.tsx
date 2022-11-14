import { Meta, Story } from "@storybook/react";
import FirstPost from "./FirstPost";

export default {
  title: "First Post",
  component: FirstPost,
} as Meta;

const Template: Story = (args) => <FirstPost {...args} />;

export const Default = Template.bind({})

