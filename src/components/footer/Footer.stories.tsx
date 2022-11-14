import { Meta, Story } from "@storybook/react";
import Footer from "./Footer";

export default {
    title: 'Footer',
    component: Footer
} as Meta

const Template: Story = args => <Footer {...args}/>

export const Default = Template.bind({})

