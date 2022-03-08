import React from 'react';
import './App.css';
import Header from './component/header'
import Sidebar from './component/Sidebar'
import SidebarRow from './component/SidebarRow'


function App() {
  return (
    <div className="App">
   <Header />
   <Sidebar />
   <SidebarRow />
    </div>
  );
}

export default App;
