import React, { useState } from "react";
export default function Counter() {
//   let count = 7;
const [count, setCount] = useState(7);


  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count +1)}
        id="wd-counter-up-click"
        className="me-2 rounded border-0"
        style={{ backgroundColor: "green", color: "white", marginRight: "10px" }}>
        Up
      </button>

      <button
        onClick={() => setCount(count -1)}
        id="wd-counter-down-click"
        className="rounded border-0" 
        style={{backgroundColor: "red", color: "white" }}>
        Down
      </button>
<hr/></div>);}