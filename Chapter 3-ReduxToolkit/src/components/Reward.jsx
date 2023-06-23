import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../reducers/reward';
function Reward() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.reward.points);

  return (
    <div>
      <h1>
        <b>Reward Component</b>
      </h1>
      <h3>Total reward : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>

    </div>
  );
}

export default Reward;
