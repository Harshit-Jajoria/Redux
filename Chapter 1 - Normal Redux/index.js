import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

// action name constants
const init = 'account/initalize';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'incrementByAmount'; // common for both the reducers
const incBonus='bonus/inc'

// store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bounus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

//reducer
function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case init: {
      return { amount: action.payload };
    }
    case inc: {
      return { amount: state.amount + 1 };
    }
    case dec: {
      return { amount: state.amount - 1 };
    }
    case incByAmt: {
      return { amount: state.amount + action.payload };
    }

    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:{
      return { points: state.points + 1 };
    }
    case incByAmt: {
      if(action.payload>=100)
        return { points: state.points + 1 };
    }
    default:
      return state;
  }
}

// Async Api call
async function User() {
  const { data } = await axios.get('http://localhost:3000/account/2');
  console.log(data);
}

// Action Creators

// async function initialzeUser(dispatch,getState) {
//   // const {data} = await axios.get('http://localhost:3000/account/2') this cannot be done bcoz action creater
//   // return { type: init, payload: data.amount };                     cannot be async that's why need thuk

//   const {data} = await axios.get('http://localhost:3000/account/1')
//   dispatch({type:init, payload:data.amount})
// }

function getUser(id) {
  async function initialzeUser(dispatch, getState) {
    const { data } = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch({ type: init, payload: data.amount });
  }
  return initialzeUser;
}

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}
function incrementBonus() {
  return { type: incBonus };
}


  // store.dispatch(getUser(1));
  store.dispatch(incrementBonus());


