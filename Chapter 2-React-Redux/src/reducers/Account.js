import { dec, inc, incByAmt, init } from "../actions";

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
export default accountReducer;