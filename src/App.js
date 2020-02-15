import React from 'react';
import './App.scss';
import Header from './Components/Header.jsx';
import Control from './Components/Control.jsx';
import Chart from './Components/Chart.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Control />
      <Chart />
    </div>
  );
}

export default App;
