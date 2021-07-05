import React, {FC} from 'react';
import { items } from "./components/ReportsNavigaton/mockContent/mock"
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";
import {IReportsItem} from "./components/ReportsNavigaton/types";


function App() {

  return (
    <div className="App">
      <ReportsNavigation items  = {items}/>
    </div>
  );
}

export default App;
