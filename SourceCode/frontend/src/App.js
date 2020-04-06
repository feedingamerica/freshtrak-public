import React from 'react';
import DashBoardContainer from "./Modules/Dashboard/DashBoardContainer";
import './Assets/scss/main.scss';

const App=() =>{
  return (
    <div className="App">      
      <div class="main-wrapper">
            <DashBoardContainer/>
      </div>
    </div>
  );
};

export default App;
