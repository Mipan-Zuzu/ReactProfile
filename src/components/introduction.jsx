import React  from "react";

export const Introduction = (props) => {
    const result = props.nama 
  return (
    <div>
      <h1>introduciton</h1>
      <p>base practice : {result}</p>
      
    </div>
  );
}

export const Navbars = (props) => {
  return (
    <div>
      <ul>
      <li>
        <a href="#">ini {props.utama}</a>
      </li>
      <li>
        <a href="#">ini {props.udah}</a>
      </li>
    </ul>
    </div>
  )
}

