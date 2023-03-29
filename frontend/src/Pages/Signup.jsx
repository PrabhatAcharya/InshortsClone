import React, { useState } from "react";
import loginAnimation from "../asset/login-animation.gif";
import {BiHide, BiShow} from "react-icons/bi";

import { Link } from "react-router-dom";


const Signup = () => {
  const [showPassword,setPassword] =useState(false);
  const [showConfirmPassword,setConfirmPassword]=useState(false);
  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  console.log(data);

  const handleShowPassword=() => {
    setPassword(!showPassword);
  }
  const handleShowConfirmPassword=() => {
    setConfirmPassword(!showConfirmPassword);
  }
  const handleOnChange=(event)=>{
event.preventDefault();
    setData({
    ...data,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
   const {firstName, email, password,confirmPassword} = data;
   if(firstName && email && password && confirmPassword){
    if(password===confirmPassword){
      alert("success");
    }
    else{
      alert("check your password and  confirm password");
    }
   }else{
    alert("please fill all the fields");
   }
  }
  
  return (
    <div style={{ width: "40%", margin: "auto", padding: "10px" }}>
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative "></div>
        <img
          src={loginAnimation}
          style={{ width: "50px" }}
          className="w-full"
        />
      </div>
      <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type={"text"}
          name="firstName"
          id="firstName"
          placeholder="First Name"
          className="mt-3 w-full bg-slate-500"
          value={data.firstName}
          onChange={handleOnChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type={"text"}
          name="lastName"
          id="lastName"
          placeholder="lastName"
          className="w-full bg-slate-500"
          value={data.lastName}
          onChange={handleOnChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          name="email"
          id="email"
          placeholder="abcd@example.com"
          className="w-full bg-slate-500"
          value={data.email}
          onChange={handleOnChange}
        />
        <label htmlFor="password">Password</label>
        <div className="flex px-2 py-1 bg-slate-500 mt-1 mt-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="password"
            className="w-full bg-slate-500"
            value={data.password}
            onChange={handleOnChange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>
        <label htmlFor="confirmpassword">ConfirmPassword</label>
        <div className="flex px-2 py-1 bg-slate-500 mt-1 mt-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmpassword"
            id="confirmpassword"
            placeholder="confirmpassword"
            className="w-full bg-slate-500"
            value={data.confirmpassword}
            onChange={handleOnChange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowConfirmPassword}
          >
            {showConfirmPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>
        <button
          type="submit"
          className="max-w-[120px] w-full bg-red-500 mt-5 font-medium text-cemter py-1 rounded-full  text-white text-xl"
          style={{
            width: "100px",
            padding: "auto",
            margin: "10px",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </form>
      <p className="text-left text-sm mt-3">
        Already have an account?{" "}
        <Link to={"login"} className="text-red-500 underline">
          {" "}
          Login{" "}
        </Link>
      </p>
    </div>
  );
};

export default Signup;
