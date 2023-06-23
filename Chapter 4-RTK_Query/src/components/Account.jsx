import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getUserAccount, increment, incrementByAmount } from '../slices/accountSlice';

const Account = () => {
  const [value,setValue] = useState(0) ; 

  const dispatch = useDispatch();
  const amount= useSelector(state=>state.account.amount);
  return (
    <div>
      <h1>
            <b>Account Component</b>
          </h1>
          <h3>Amount:${amount}</h3>
          <button onClick={()=>dispatch(increment())}>Increment +</button>
          <button onClick={()=>dispatch(decrement())}>Decrement -</button>
          <input type='text' onChange={(e)=>setValue(+e.target.value)}></input>
          <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By {value} </button>
          <button onClick={()=>dispatch(getUserAccount(1))}>Get User </button>
    </div>
  )
}

export default Account