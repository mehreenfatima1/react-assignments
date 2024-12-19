import React,{useState} from 'react'

const Button = () => {
const [color,setColor]=useState("white")
const changeColor=()=>{
  setColor("green")
}
const changeColorA=()=>{
  setColor("yellow")
}
  return (
    <>
    <div className='container' style={{backgroundColor:color}}>
<button onClick={changeColor} style={{backgroundColor:'green'}}>Green</button>
<button onClick={changeColorA} style={{backgroundColor:'yellow'}}>Yellow</button>
</div>
    </>
  )
}

export default Button