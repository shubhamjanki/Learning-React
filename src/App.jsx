import React from "react";
import { useState } from "react";
import User from "./User";
import Wrapper from "./Wrapper";
import Card from "./component/Card";
import NameCard from "./component/NameCard";
function App() {
  const [counter,setcounter]=useState(0);
  
  function callonce(){
    setcounter(counter+1);
  }  
  callonce();
  return (
    <>
      <div>
        <h1>User Table</h1>
        <button onClick={callonce}>Increment {counter}</button>

      </div>
  
    </>
  );
}
export default App;
