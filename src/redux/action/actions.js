import {decrement, increment} from '../reducer/counterSlice';
import store from '../store';
const dispatch = store.dispatch;
export const userIncrement = data => {
  dispatch(increment(data));
};

export const userDecrement = data => {
  dispatch(decrement(data));
};
