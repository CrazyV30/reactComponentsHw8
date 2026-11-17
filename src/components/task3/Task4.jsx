import { useState } from "react";

export default function Task4(){
    let [red,SetRed] = useState(0);
    let [green,SetGreen] = useState(0);
    let [blue,SetBlue] = useState(0);
    let color = `rgb(${red},${green},${blue})`;
    const generate = ()=>{
        // eslint-disable-next-line no-unused-vars
        SetRed((r)=>r=Math.floor(Math.random()*256));
        // eslint-disable-next-line no-unused-vars
        SetGreen((g)=>g=Math.floor(Math.random()*256));
        // eslint-disable-next-line no-unused-vars
        SetBlue((b)=>b=Math.floor(Math.random()*256));
    };
    return (
        <>
        <h1>Task 4</h1>
        <div style={{backgroundColor:color, width:'100px', height:'100px'}}></div>
        <button onClick={generate}>Generate</button>
        </>
    );
}