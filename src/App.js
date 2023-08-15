import React, { useState,useEffect } from 'react';
import './App.css';
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/SignUp/SignUp";
import Posts from './Components/posts/posts';

import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

const changestate=()=>
{
  setregistration(true);
}
const [registration, setregistration] = useState(false);

useEffect(() => {
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
      </div>  
     
  );
}

export default App;


