import React from 'react';
import './App.scss';
import DashboardComponent from "./Modules/Dashboard/DashboardComponent";


const App=() =>{
  return (
    <div className="App">
      
      <header className="App-header">
            <DashboardComponent/>
      </header>
    </div>
  );
};

export default App;
