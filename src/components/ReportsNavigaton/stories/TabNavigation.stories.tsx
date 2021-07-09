import React from "react";
import { Story } from "@storybook/react";
import TabNavigation, {
  TabNavigationProps,
} from "../../TabNavigation/TabNavigation";

export default {
  title: "TabNavigation",
  component: TabNavigation,
  argTypes: {
    onClick: { action: "Clicked" },
  },
};
const Template: Story<TabNavigationProps> = (args) => (
  <TabNavigation {...args} />
);

export const Navigation = Template.bind({});
Navigation.args = {
  items: [
    { id: "1", title: "Your Interests", foo: () => console.log("callback  1") },
    { id: "2", title: "Carlyle Group", foo: () => console.log("message 2") },
    { id: "3", title: "Total Fund", foo: () => console.log("message 3") },
  ],
  activeTabItemId: "1",
};
