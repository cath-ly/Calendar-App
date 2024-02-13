import React from 'react';
import logo from './logo.svg';
import './App.css';

import { getMonth } from '../components/util.js'
import CalendarHeader from '../components/CalendarHeader.js';
import SideBar from '../components/SideBar.js';
import Month from '../components/Month.js';

function App() {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <SideBar />
          <Month />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
