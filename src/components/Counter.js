import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={()=>props.incrementCount()}>+</button>
      <button onClick={()=>props.decrementCount()}>-</button>
    </div>
  )
}

export default Counter