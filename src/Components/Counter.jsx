import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'

function Counter() {
const dispatch=useDispatch()
const count=useSelector((state)=>state.counterReducer.count)
const [amount,setAmount]=useState("")

const handleIncrement=()=>{
  if(amount==""){
    alert("Please Provide Proper values")
  }
  else{
    dispatch(incrementByAmount(Number(amount)))
    setAmount("")
  }
}
  return (
    <div>
      <h1 className='text-center text-light fw-bolder mt-5' style={{fontSize:"60px",textShadow:"0px 2px 4px 6px  "}}>Counter Application</h1>
      <div className="container mt-5 border rounded p-5 w-50" style={{backgroundColor:"#A5B68D"}}>
        <h1 style={{fontSize:'60px',backgroundColor:"#A5B68D",}} className='text-center text-light fw-bolder' >{count}</h1>
        <div className="d-flex justify-content-center align-items-center w-100 mt-5" style={{backgroundColor:"#A5B68D",gap:"1rem"}}>
            <button className='btn btn-light' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-light' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-light' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex mt-5" style={{backgroundColor:"#A5B68D"}}>
            <input type="text"  className='form-control' placeholder='Enter the Amount to be incremented' onChange={e=>setAmount(e.target.value)} value={amount} />
            <button onClick={handleIncrement} className='btn btn-light ms-3' style={{backgroundColor:"#C1CFA1",color:"white"}}>Increment Amount</button>
            
        </div>
      </div>
    </div>
  )
}

export default Counter
