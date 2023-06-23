import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';
function Bonus() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.bonus.points);

  return (
    <div>
      <h1>
        <b>Bonus Component</b>
      </h1>
      <h3>Total point : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </div>
  );
}

export default Bonus;
