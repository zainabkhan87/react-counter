import React, { useState } from 'react'

function Counter() {
    let[count,setcount]=useState(0)
    const handledecrement=()=>{
        setcount(count-1)
    }
    const handleincrement=()=>{
        setcount(count+1)
    }
  return (
    <div>
     <h1>Counter App</h1>   
    <button onClick={handledecrement}>-</button>
    <h1>{count}</h1>
    <button onClick={handleincrement}>+</button>
    </div>
  )
}

export default Counter
