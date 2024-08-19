import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

export const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incremnetbyamount: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, reset, incremnetbyamount } = counterslice.actions;
export default counterslice.reducer;
