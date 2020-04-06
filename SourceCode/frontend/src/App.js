import React from 'react';
import './App.scss';
import DashBoardContainer from "./Modules/Dashboard/DashBoardContainer";


const App=() =>{
  return (
    <div className="App">
      <header className="App-header">
            <DashBoardContainer/>
      </header>
    </div>
  );
};

export default App;
