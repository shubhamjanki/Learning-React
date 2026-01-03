import React from "react";
import { useState } from "react";
import User from "./User";
import Wrapper from "./Wrapper";
import Card from "./component/Card";
function App() {
  const [name, setname] = useState([]);
  const [show, setShow] = useState();
  const [count, setcount] = useState();
  const [hover, sethover] = useState(false);
  const Shubham = {
    name: "Shubham",
    age: "21",
    email: "shubh@123",
  };
  const karan = {
    name: "karan",
    age: "21",
    email: "shubh@123",
  };
  const Sainik = {
    name: "Sainik",
    age: "21",
    email: "shubh@123",
  };
  const ayush = {
    name: "ayush",
    age: "21",
    email: "shubh@123",
  };
  const names = ["Shubham", "ayush", "karan", "sainik"];
  function array(newname) {
    setname([...name, newname]);
    console.log(name);
  }
  return (
    <>
      <div>
        <h1>hello react</h1>
        <select name="" id="" onClick={(event) => setShow(event.target.value)}>
          <option value="1">one</option>
          <option value="2">two</option>
        </select>
        {/* <input type="radio" name="options" id="opt1" value="1" onChange={(event)=>setShow(event.target.value)}/>
      <label htmlFor="opt1">one</label>
      <input type="radio" name="options" id="opt2" value="2" onChange={(event)=>setShow(event.target.value)}/>
      <label htmlFor="opt2">two</label> */}
        <h1>
          {show === "1" ? (
            <h2>{show}</h2>
          ) : show === "2" ? (
            <h2>{show}</h2>
          ) : null}
        </h1>
        <button onClick={() => (name ? setname(null) : setname("Shubham"))}>
          click me{" "}
        </button>
        <h1>{name ? name : "nhi hh khali hhh"}</h1>
        {/* <User detail={names} /> */}
      </div>
      {/* <Wrapper><marquee behavior="" direction=""><h1>hello wrapper</h1></marquee></Wrapper> */}
      <input
        type="text"
        id="1"
        onChange={(event) => array(event.target.value)}
      />
      <input
        type="text"
        id="2"
        onChange={(event) => array(event.target.value)}
      />

      <button onClick={() => array(name)}>click</button>
      <Wrapper>
        <Card color="blue">
          <h1
            style={{
              fontSize: "30px",
              margin: "5px",
              textAlign: "center",
              textDecoration: "underline",
              transition: "all 0.3s ease",
              boxShadow: hover ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
              transform: hover ? "scale(1.05)" : "scale(1)",
            }}
           onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
          >

            Shubham Pandey
          </h1>
          <p style={{ fontSize: "20px", margin: "0px", padding: "0px" }}>
            helllo every onre
          </p>
        </Card>
      </Wrapper>
    </>
  );
}
export default App;
