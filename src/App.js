import React, { useState,useEffect } from 'react';
import './App.css';
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/SignUp/SignUp";
import pic from './a.jpg';
import Posts from './Components/posts/posts';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {

const changestate=()=>
{
  setregistration(true);
  console.log("Registration:checkup", registration);
}
const [registration, setregistration] = useState(false);

useEffect(() => {
  console.log("Registration has been updated:", registration);
}, [registration]);


  return (
    <div>
    <BrowserRouter>
    <div className="App  pl7">
      <header className="App-headers">
      <Routes>   
      <Route path="/" element={<LoginPage changestate={changestate}/>} />  
      <Route path="/main" element={<Posts />} />
      <Route path="/SignUp" element={ <SignUp /> }/>   
      </Routes>
      </header>
    </div>       
    </BrowserRouter>
      { console.log("rrr",registration) } 
      </div>  
     
  );
}

export default App;


