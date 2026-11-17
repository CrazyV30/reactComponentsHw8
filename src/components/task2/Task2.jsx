import { useState } from "react";

export default function Task2({num1,num2,num3}){
   const [count, setCount] = useState(0);
    const addNum = (num)=>{
        setCount((val)=>val+num);
    };

    return (
        <>
        <h1>Task 2</h1>
        <div>{count}</div>
        <button onClick={()=>addNum(num1)}>{num1}</button>
        <button onClick={()=>addNum(num2)}>{num2}</button>
        <button onClick={()=>addNum(num3)}>{num3}</button>
        </>
    );
    
}