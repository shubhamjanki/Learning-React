import React from "react";
import { useState } from "react";
import User from "./User";
import Wrapper from "./Wrapper";
import Card from "./component/Card";
import NameCard from "./component/NameCard";
function App() {
  const User= [{
    name: "Shubham",
    age: "21",
    email: "shubh@123",
    id:1
  },
 {
    name: "karan",
    age: "21",
    email: "shubh@123",
    id:2
  },
  {
    name: "Sainik",
    age: "21",
    email: "shubh@123",
    id:3
  },
   {
    name: "ayush",
    age: "21",
    email: "shubh@123",
    id:4
  }];
  function array(newname) {
    setname([...name, newname]);
    console.log(name);
  }
  return (
    <>
      <div>
        <h1>User Table</h1>
        <Card userData={User}></Card>
        {
          User.map(user => (
            <NameCard color="red"key={user.id} userData={user}></NameCard>
          ))
        }
      </div>
  
    </>
  );
}
export default App;
