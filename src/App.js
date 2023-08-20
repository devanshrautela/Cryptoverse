import React, { useState,useEffect } from 'react';
import './App.css';
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/SignUp/SignUp";
import Main from './Components/main/main';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './Components/profile/profile';
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
    <div className="App">
      <header className="App-headers">
      <Routes>   
      <Route path="/" element={<LoginPage changestate={changestate}/>} />  
      <Route path="/main" element={<Main />}/>
      <Route path="/SignUp" element={ <SignUp /> }/>   
      <Route path="/profile" element={ <Profile /> }/>   
      </Routes>
      </header>
    </div>       
    </BrowserRouter>
      </div>  
     
  );
}

export default App;


