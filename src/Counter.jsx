import React, { useEffect } from "react";
function counter({counter,data}){
    function handleCounter(){
        console.log("hello");
    }
    function handleData(){
        console.log("datata")
    }
    useEffect(()=>{
        handleCounter();
    },[counter])
    useEffect(()=>{
        handleData();
    },[data])
    
    return(
        <>
        <div>
            <h1>{counter}</h1>
            <h1>{data}</h1>
        </div>
        </>
    )
}
export default counter; 