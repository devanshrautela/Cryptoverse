import React, { useState } from 'react';
import './LoginPage.css'
// import { useNavigate } from 'react-router-dom';
import {Link } from "react-router-dom";


const LoginForm = ({ changestate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [registertion, setregistertion] = useState('false');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }


    // TODO: Handle login logic (authentication)
  };

  

// const navigate = useNavigate();
const changestate2 = ()=>{  
  changestate();
  console.log("registration");
  // navigate('/');

};

  return (
    <article className="ma5 mw6 center pa4 gradient-custom-2 br3 ba dark-gray b--black-10">
      <h2 className="tc">Welcome to the Cryptomania</h2>
      <div className="pa3 shadow-5 bg-light-blue br3 mv5">
        <form className="measure center" onSubmit={handleSubmit}>
          <legend className="f4 fw6 center">Login Page</legend>
          <div className="mv3">
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-100 fontft"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error pv2 tc">{emailError}</div>
          </div>
          <div className="mv3">
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-100 fontft " placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error pv2 tc">{passwordError}</div>
          </div>
          <div className="mv3">
            <button className="b br2 ph4 input-reset bg-transparent pointer hover-light-grey tc w-100" type="submit">
              Login
            </button>
          </div>
        </form>
        <hr className="separator_line"></hr>
        <div>
          <p className="f5 tc ">
            Don't have an account? <Link to='./SignUp' className="link dim black db" onClick={changestate2}>Sign Up</Link>
              {/* Sign Up</a> */}
          </p>
        </div>
      </div>
    </article>
  );
};

export default LoginForm;
