import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';

function App() {
  const [activeTab, setActiveTab] = useState("")

  return (
    <div style={{padding: "25px"}}>
      <Tabs content={["This is the first tab", "This is the second tab", "This is the final tab (just kidding its the third)", "This is actually the final tab"]} active={setActiveTab} />
      <div style={{border: "2px black solid", width: "200px", width: "394px", height: "100px", margin: "25px 5px", padding: "5px 10px" }}>
        {activeTab}
      </div>
    </div>
  );
}

export default App;
