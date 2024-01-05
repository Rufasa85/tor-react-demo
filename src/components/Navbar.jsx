import React from 'react'

export default function Navbar(props) {
    const style = {
        position:"fixed",
        top:props.topOffset||"0",
        background:props.bgColor||"white",
        width:"100vw",
        display:"flex",
        justifyContent:"space-around",
        fontSize:"2rem"
    }
  return (
    <nav style={style}>
        <a href="/">Go home!</a>
        <a href="/">About!</a>
    </nav>
  )
}
