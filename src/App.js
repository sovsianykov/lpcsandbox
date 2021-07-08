import React, {useEffect, useState} from 'react';
import { items, repHeaderItem, tabItems  } from "./components/ReportsNavigaton/mockContent/mock"
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";
import RepHeader from "./components/RepHeader/RepHeader";
import TabItem from "./components/TabNavigation/TabItem";
import TabNavigation from "./components/TabNavigation/TabNavigation";



function App() {
    const [itemsArr , setItemsArr] = useState(items)
    const [activeMenuItemId , setActiveMenuItemId] = useState('2')
    const  header = repHeaderItem
  return (
    <div className="App">
      <ReportsNavigation
          items  = { itemsArr }
          activeMenuItemId = { activeMenuItemId }
      />
        <RepHeader header={header}/>
     <TabNavigation items={ tabItems } activeTabItemId={'2'}/>
    </div>
  );
}

export default App;
