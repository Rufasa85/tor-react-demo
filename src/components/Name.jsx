import React from 'react'

export default function Name(props) {
  console.log(props)
  const h2Styles = {
    color:props.person.length%2===0?"red":"blue",
    backgroundColor:props.favColor||`rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.random()})`
  }
  return (
    <>
    <h2 style={h2Styles}>{props.person}</h2>
      <h3 style={{...h2Styles,fontFamily:"Comic Sans MS"}}>Backwards name = {props.person.split("").reverse().join("")}</h3>
      <hr/>
    </>
  )
}
