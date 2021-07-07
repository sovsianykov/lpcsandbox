import React  from 'react';
import { items, activeMenuItemId } from "./components/ReportsNavigaton/mockContent/mock"
import ReportsNavigation from "./components/ReportsNavigaton/ReportsNavigation";



function App() {

  return (
    <div className="App">
      <ReportsNavigation
          items  = { items }
          activeMenuItemId = { activeMenuItemId }
      />
    </div>
  );
}

export default App;
