import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [NameError, setNameError] = useState('');

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
    if (!Fname || !Lname) {
      setNameError('First name and last name are required');
      return;
    }

    // TODO: Handle registration logic (e.g., create a new user)
    // You can use the values of `Fname`, `Lname`, `email`, `password`, `dob`, and `gender` for registration.
    // Handle the registration logic here.
  };

  return (
    <article className="ma5 mw6 center pa4 gradient-custom-2 br3 ba dark-gray b--black-10">
      <h2 className="tc">Create a New Account</h2>
      <div className="pa3 shadow-5 bg-light-green br3 mv4">
        <form className="measure center" onSubmit={handleSubmit}>
          <legend className="f4 fw6 tc">Registration Page</legend>
          <div className="mv3 flex">
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-50"
              placeholder="First Name"
              type="text"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-50 ml3"
              placeholder="Last Name"
              type="text"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="error pv2 tc">{NameError}</div>
          <div>
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-100"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error pv2 tc">{emailError}</div>
          </div>
          <div>
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-100"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error pv2 tc">{passwordError}</div>
          </div>

          {/* Additional fields */}
          <div>
            <input
              className="input-reset ba b--black-20 pa2 mb2 w-100"
              placeholder="Date of Birth (YYYY-MM-DD)"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            {/* You can add validation for the date of birth format here */}
          </div>
          <div className="flex items-center">
            <p className="mb2">Gender:</p>
            <label className="mr2">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>
            <label className="mr2">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                value="Others"
                checked={gender === "Others"}
                onChange={(e) => setGender(e.target.value)}
              /> Others
            </label>
          </div>

          <div className="mv3">
            <button className="b br2 ph4 input-reset bg-transparent pointer hover-light-grey tc w-100" type="submit">
              Register
            </button>
          </div>
        </form>
        <hr className="separator_line"></hr>
        <div>
          <p className="f5 tc">
            Already have an account? <Link to="/" className="link dim black db">Login</Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default SignUp;
