import React,{useState,useEffect} from "react";
import "./App.css";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import MyPost from "./components/postComponents/MyPost";
import PostList from "./components/postComponents/PostList";
import NewPost from "./components/postComponents/NewPost";
import Home from "./components/Home/Home";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
function App() {

  const [username, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(localStorage.getItem("userInfo")
      )
    );
  }, []);

  
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="App">
            <Routes>
        {/* <Route path="/" element={<Homepage />}/> */}
      
        <Route path="/" element={<Home currentId={currentId} setCurrentId={setCurrentId} />}/>


        {/* <Route path="/Auth" element={<Homepage />}/>  
             <Route path="/Blog" element={<PostList currentId={currentId} setCurrentId={setCurrentId} user={username} setUser={setUserName}/>}/> 
            
            <Route path="/NewPost" element={<NewPost currentId={currentId} setCurrentId={setCurrentId} user={username} setUser={setUserName}/>}/>
           
            <Route path="/MyPost" element={<MyPost currentId={currentId} setCurrentId={setCurrentId} user={username} setUser={setUserName}/>}/>  */}
      {/* <Route path="/chats" element={<Chatpage />} /> */}
      {/* <Route path="/Home/*" element={<Home currentId={currentId} setCurrentId={setCurrentId} />}/>    */}
      </Routes>
    </div>
  );
}

export default App;
