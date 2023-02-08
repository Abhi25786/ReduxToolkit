import { configureStore } from "@reduxjs/toolkit";
import combineReducer from './reducer'

const store = configureStore({ reducer: combineReducer })
export default store
