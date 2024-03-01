import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useState} from 'react';
//import {Link } from 'react-router-dom';

const SignUp = () => {
  const [member_no, setMemberNo] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member_no,
        mobile_no,
        email,
        password,
        password_confirmation: passwordConfirmation,
        otp
      }),
    }).then((r) => {
      if (r.ok) {
        alert("Registration Successfull")
        navigate('/app')
        // r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className='signup'>
      <form className='frm' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Member No</label>
        <input
          type="text"
          id="member_no"
          autoComplete="off"
          value={member_no}
          onChange={(e) => setMemberNo(e.target.value)}
        />
        <label htmlFor="username">Mobile No</label>
        <input
          type="text"
          id="mobile_no"
          autoComplete="off"
          value={mobile_no}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="username">OTP</label>
        <input
          type="text"
          id="otp"
          autoComplete="off"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
       
        <button className='btns' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp