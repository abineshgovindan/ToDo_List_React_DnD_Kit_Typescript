import "./Input.css"

import React, { useState } from 'react'


const Input = ({onSubmit}:any) => {
    const [input, setInput] = useState("");


    const handleSumit = () => {
        if(!input) return;
        onSubmit(input);
        setInput("");
    }
  return (
    <div className="container">
        <input type="text"
         className="input"
         value={input}
         onChange={e=> setInput(e.target.value)} />
         <button className="btn"onClick={handleSumit}>Add</button>
    </div>
  )
}

export default Input