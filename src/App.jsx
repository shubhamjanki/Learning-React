import React, { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import Wrapper from "./Wrapper";
import Card from "./component/Card";
import NameCard from "./component/NameCard";
import Counter from "./Counter";
function App() {
  const [style,setstyle]=useState({});
  const design1={
    boxShadow:"10px 10px 5px grey",
    padding:"20px",
    margin:"20px",
    borderRadius:"10px",
    backgroundColor:"lightblue",
    width:"300px"

  }
  const design2={
    boxShadow:"5px 5px 5px black",
    padding:"15px",
    margin:"15px",
    borderRadius:"5px",
    backgroundColor:"lightgreen"  
  }
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
      <div style={style}>
        <h1 style={{color:"red",textUnderlineOffset:"3px",textDecorationLine:"underline",textDecorationColor:"black",textAlign:"center"}}>Profile</h1>
        <img  style={{border:"solid black 2px",objectFit:"contain",width:"100%"}} src="https://i.imgur.com/8O5Xzzq.gif" alt="" />
        <h2>Mast bear</h2>
        <h2>Software Developer</h2>
      </div>
      <button onClick={() => setstyle(design1)}>Design 1</button>
    </div>
    <button onClick={() => setstyle(design2)}>Design 2</button>
    </>
  );
}
export default App;
