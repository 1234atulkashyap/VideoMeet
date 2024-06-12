// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div className=" p-5">
      <h1 className="bg-red-100 p-5 rounded-md text-2xl font-semibold">
        Enter Your Name and click on Join
      </h1>
      <input
        className="mt-5 bg-green-100 px-5 py-3 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Enter your Name"
      />
      <div>
        <button className="bg-blue-500 px-5 py-1 rounded-lg mt-5 text-white font-bold"
          onClick={() => {
            handleSubmit();
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
