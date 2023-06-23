import React from 'react';
import { useSelector } from 'react-redux';
import Bonus from './components/Bonus';
import Account from './components/Account';
import Reward from './components/Reward';
import Admin from './components/Admin';

const App = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div>
      <h1>App Component</h1>
      <h3>Amount: {amount}</h3>
      <h3>Points: {points}</h3>
      <Account/>
      <Bonus/>
      <Reward/>
      <Admin/>
    </div>
  );
};

export default App;
