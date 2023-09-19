import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  const [getNavbarValue, setNavbarValue] = useState("")
  const changeNavbarValue = () => {
    setNavbarValue("My Contact");
  }
  return (
    <div>
      <NavigationBar navValue={getNavbarValue}/>
      <h1 className="title">Ini Homepage</h1>
      <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
    </div>
  );
}

export default App;
