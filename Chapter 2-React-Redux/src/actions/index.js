import axios from 'axios';

// action name constants
export const init = 'account/initalize';
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/incrementByAmount';
export const incBonus = 'bonus/inc';

// Action Creators

export function getUser(id) {
  async function initialzeUser(dispatch, getState) {
    const { data } = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch({ type: init, payload: data.amount });
  }
  return initialzeUser;
}

export function increment() {
  return { type: inc };
}
export function decrement() {
  return { type: dec };
}
export function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}
export function incrementBonus() {
  return { type: incBonus };
}
