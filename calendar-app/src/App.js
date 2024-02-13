import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getMonth } from '../components/util.js'

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
