import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import cat from '../../../public/image/cat.png'

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong credentials!");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <img src={cat} alt="attack" className="w-[100%] lg:w-[70%] h-[300px] m-auto mt-3 rounded-[15px]"/>
      <form className="w-[50%] flex flex-col" onSubmit={login}>
        <input
          className="border rounded-[10px] p-[10px] my-[10px] outline-none"
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className="border rounded-[10px] p-[10px] my-[10px] outline-none"
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <div className="flex justify-between lg:ml-8 w-[100%] lg:w-[90%]">
          <p className="text-[12px] lg:text-[14px] text-[#949191]">Remember me</p>
          <p className="text-[12px] lg:text-[14px] text-[#949191]">Forget Password</p>
        </div>
        <button type="submit" className="bg-[#E0C3FC] text-white p-3 rounded-[10px] mt-4">
          Login
        </button>
      </form>
      <div className="mt-10">
        <p className="font-light opacity-60">
          don't have an account yet?{" "}
          <Link to="/register" className="font-bold opacity-90">
            Register Now!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
