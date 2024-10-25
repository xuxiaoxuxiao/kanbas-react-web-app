import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement}
        className="me-2 mb-3 rounded border-0" 
        style={{ backgroundColor: "green", color: "white" }}>
        Add Element</button>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {array.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>{item}</span>
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click"
                    className="me-2 rounded border-0" 
                    style={{ backgroundColor: "red", color: "white"}}>
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
