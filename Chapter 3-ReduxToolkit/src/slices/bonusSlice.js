import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 0,
};
const incrementByAmount = createAction('account/incrementByAmount'); // to match some reducers 
export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, actions) => {
      if (actions.payload >= 100) {
        state.points++;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
