import React from 'react';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';

const App = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div>
      <h1>App Component</h1>
      <h3>Amount: {amount}</h3>
      <h3>Points: {points}</h3>
      <Account />
      <Bonus />
    </div>
  );
};

export default App;
