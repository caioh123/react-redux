import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state.counter += 1;
    },
    decrement(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state.counter -= 1;
    },
    addBy(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
