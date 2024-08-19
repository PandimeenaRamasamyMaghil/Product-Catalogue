import { createSlice } from "@reduxjs/toolkit";
const initialstae={
    nameval:'meena'
}
export const Alertslice=createSlice({
    name:'names',
    initialstae,
    reducers:{
        display1:(state,action)=>{
            state.nameval=action.payload;
        }
    }
})

