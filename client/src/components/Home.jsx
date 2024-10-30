import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };
  return (
    <form
      className="w-full h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-8">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={4}
        name="username"
        id="username"
        className="p-3 w-1/2 my-3 "
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="w-52 p-3 text-base pointer bg-slate-500 color-[#f9f5eb]  outline-none border-none rounded-md">
        SIGN IN
      </button>
    </form>
  );
};

export default Home;
