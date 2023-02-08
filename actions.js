import { decrementData, incrementData } from "./reducer"
import store from "./store"
 const dispatch = store.dispatch
export const increment = (data) => {
//    alert(data) 
    dispatch(incrementData(data))
}
export const decrement =(data)=>{
    dispatch(decrementData(data))
}