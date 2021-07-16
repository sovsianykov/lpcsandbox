import React, {FunctionComponent, useState} from "react";
import { Story } from "@storybook/react";

import TabNavigation, {
  TabNavigationProps,
} from "../TabNavigation";

const TabNavigationWrapper: FunctionComponent<TabNavigationProps> = ({
  items,
}) => {
  const [activeTabItemId, setActiveTabItemId ] = useState("1");
  return (
      <TabNavigation items={items}
                     activeTabItemId={activeTabItemId}
                     onClick={(id:string) =>setActiveTabItemId(id)}/>
  );
};

export default {
  title: "TabNavigationWrapper",
  component: TabNavigationWrapper,

};
const Template: Story<TabNavigationProps> = (args) => (
  <TabNavigationWrapper {...args} />
);

export const Navigation = Template.bind({});
Navigation.args = {
  items: [
    { id: "1", title: "Your Interests" },
    { id: "2", title: "Carlyle Group" },
    { id: "3", title: "Total Fund" },
  ]

};
