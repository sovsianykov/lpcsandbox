import React, { useState } from "react";
import {
  repHeaderItem,
  tabItems,
} from "./components/ReportsNavigaton/mockContent/mock";
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";
import RepHeader from "./components/RepHeader/RepHeader";
import TabNavigation from "./components/TabNavigation/TabNavigation";

function App() {
  const [activeMenuItemId, setActiveMenuItemId] = useState("1");
  const items = [
    {
      id: "1",
      title: "Capital Account Management",
      foo: (id) => {
        console.log(id);
        setActiveMenuItemId(id);
      },
    },
    {
      id: "2",
      title: "Schedule of Investments ",
      foo: (id) => {
        console.log(id);
        setActiveMenuItemId(id);
      },
    },
    {
      id: "3",
      title: "Cash Flow Activity",
      foo: (id) => {
        console.log(id);
        setActiveMenuItemId(id);
      },
    },
  ];

  return (
    <div className="App">
      <ReportsNavigation items={items} activeMenuItemId={activeMenuItemId} onClick={(id) =>setActiveMenuItemId(id)}    />
      {/*   <RepHeader header={ repHeaderItem }/>*/}
      {/*<TabNavigation items={ tabItems } activeTabItemId={'2'}/>*/}
    </div>
  );
}

export default App;
