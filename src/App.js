import React, { useContext, useEffect, useState } from 'react';
import './App.css';

import getMonth from './utils/getMonth.js'
import CalendarHeader from './components/CalendarHeader.js';
import SideBar from './components/SideBar.js';
import Month from './components/Month.js';
import GlobalContext from './contexts/GlobalContext.js';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() =>  {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <SideBar />
          <Month month = {currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
