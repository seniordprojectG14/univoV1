import React,{useState,useEffect} from "react";
import "./App.css";

import Homepage from "./Pages/Homepage";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Home from "./components/Home/Home";

function App() {

  
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
      {/* <Route path="/" component={Homepage} exact /> */}
      {/* <Route path="/chats" element={<Chatpage />} /> */}
      <Route path="/Home/*" element={<Home currentId={currentId} setCurrentId={setCurrentId} />}/>   
      </Routes>
    </div>
  );
}

export default App;
