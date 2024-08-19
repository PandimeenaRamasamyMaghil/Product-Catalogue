import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incremnetbyamount } from './Features/Counterslice'
import { useNavigate } from 'react-router-dom'
const Reacttool = () => {
  const navigate=useNavigate();

    const count=useSelector((state)=>state.counter.count)
    const [incrementbynumber,setincrementbynumber]=useState(0);
    const Addval=Number(incrementbynumber)||0;
    const dispatch=useDispatch();
  const resetAll=()=>{
    setincrementbynumber(0);
    dispatch(reset());

  }
  return (
    <div style={{margin:'250px'}}>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <input type="text" value={incrementbynumber} onChange={(e)=>setincrementbynumber(e.target.value)} />
 <div>
    <button onClick={()=>dispatch(incremnetbyamount(Addval))}>Add amount</button>
    <button onClick={resetAll}>Reset</button>
 </div>
 <li onClick={()=>navigate("/users")}>Users</li>
 <a href="/users">user</a>
    </div>
  )
}
export default Reacttool