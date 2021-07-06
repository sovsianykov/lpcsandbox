import React  from 'react';
import { items } from "./components/ReportsNavigaton/mockContent/mock"
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";



function App() {

  return (
    <div className="App">
      <ReportsNavigation items  = { items }/>
    </div>
  );
}

export default App;
