import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cat from '../../../public/image/cat.png'

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("You succesfully registred!");
    } else {
      alert("we cannot register you! you alredy have an account!");
    }
    console.log(response);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <img src={cat} alt="attack" className="w-[100%] lg:w-[70%] h-[300px] m-auto mt-3 rounded-[15px]"/>
      <form className="w-[50%] flex flex-col" onSubmit={register}>
        <input
          className="border rounded-[10px] p-[10px] my-[10px] outline-none"
          type="text"
          placeholder="username"
          name="username"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className="border rounded-[10px] p-[10px] my-[10px] outline-none"
          type="text"
          placeholder="password"
          name="password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" className="bg-[#E0C3FC] text-white p-3 rounded-[10px] mt-4">
          Register
        </button>
      </form>
      <div className="mt-6">
        <p className="font-light opacity-60">
          do you have an account?{" "}
          <Link to="/login" className="font-bold opacity-90">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
