import React from 'react'

function formdatahandle(props) {
  return (
    <div>
        <h1>your name is {props.name}</h1> and {props.age < 18 ? <h1> your age is under 18 </h1>:<h1> your age is over 18 </h1> } 
    </div>
  )
}

export default formdatahandle