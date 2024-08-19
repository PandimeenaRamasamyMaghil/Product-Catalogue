import React, { useState } from 'react'

const Usestatehook = () => {
    const [count,setcount]=useState(0);
  return (
    <div style={{margin:'200px'}}>
        <p>Count Text </p>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>increse</button>
        <button onClick={()=>setcount(count-1)}>decrese</button>
    </div>
  )
}


export default Usestatehook