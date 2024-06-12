// import React from 'react'

import { useState } from "react";
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // alert(input);
    navigate(`/room/${input}`)
  };
  return (
    <div>
      <h1>HomePage</h1>
      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="input" />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default HomePage;
