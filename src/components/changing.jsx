import { useState } from "react";
function Naming(){
    let [name,setName]=useState("Gopika")
    const changeName = ()=>{
        setName("Radhika")
        console.log("Radhika")
    }
    return(
        <div>
            <h1>Name:{name}</h1>
            <button onClick={changeName}>Change</button>
        </div>
    )
}
export default Naming;