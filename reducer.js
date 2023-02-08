import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 }
export const numValue = createSlice({
    initialState,
    name: 'numValue',
    reducers: {
        incrementData: (state,actions) => {
            console.log(actions.payload);
            state.value+=actions.payload
        },
        decrementData: (state,actions) => {
            console.log(actions.payload);
            state.value-=actions.payload
        },
    }
})
export const { incrementData, decrementData } = numValue.actions
export default numValue.reducer