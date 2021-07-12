import React, {useState} from 'react';
import {items, repHeaderItem, tabItems} from "./components/ReportsNavigaton/mockContent/mock"
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";
import RepHeader from "./components/RepHeader/RepHeader";
import TabNavigation from "./components/TabNavigation/TabNavigation";


function App() {
    const [itemsArr , setItemsArr] = useState(items)
    const [activeMenuItemId , setActiveMenuItemId] = useState('1')
    return (
    <div className="App">
      <ReportsNavigation
          items  = { itemsArr }
          activeMenuItemId = { activeMenuItemId }
      />
        <RepHeader header={ repHeaderItem }/>
     <TabNavigation items={ tabItems } activeTabItemId={'2'}/>
    </div>
  );
}

export default App;
