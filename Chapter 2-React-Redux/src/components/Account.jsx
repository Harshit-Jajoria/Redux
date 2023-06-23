import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../actions';

const Account = () => {
  const [value,setValue] = useState(0)
  const amount = useSelector((state) => state.account.amount);
  const dispatch=useDispatch()    

  return (
    <div>
      <h1>Account Component</h1>
      <h2>Ammount:{amount}</h2>
      <button onClick={()=>dispatch(increment())}>Increase by 1 </button>
      <button onClick={()=>dispatch(decrement())}>Decrease by 1 </button>
      <input type="text" onChange={(e)=>setValue(+e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(value))}>Increase by {value} </button>


    </div>
  );
};

export default Account;
