import React, {useEffect, useState} from 'react';
import { items } from "./components/ReportsNavigaton/mockContent/mock"
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";



function App() {
    const [itemsArr , setItemsArr] = useState(items)
    const [activeMenuItemId , setActiveMenuItemId] = useState('1')
    useEffect(()=>{

    })
  return (
    <div className="App">
      <ReportsNavigation
          items  = { itemsArr }
          activeMenuItemId = { activeMenuItemId }
      />
    </div>
  );
}

export default App;
