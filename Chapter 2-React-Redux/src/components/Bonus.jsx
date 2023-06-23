import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from '../actions';

const Bonus = () => {
  const points = useSelector((state) => state.bonus.points);
  const dispatch=useDispatch()    
  return (
    <div>
      <h1>Bonus Component</h1>
      <h2>Points:{points}</h2>
      <button onClick={()=>dispatch(incrementBonus())}>Increase by 1 </button>
    </div>
  );
};

export default Bonus;
