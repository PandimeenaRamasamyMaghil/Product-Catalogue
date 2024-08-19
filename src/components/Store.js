import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counterslice'


export const store=configureStore({
    reducer:{
        counter:counterReducer,

    }
})

