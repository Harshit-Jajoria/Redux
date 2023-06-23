import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')


const initialState = { points: 20 }

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++
    }).addCase(incrementByAmount, (state, action) => {
        state.points+=action.payload
      })
    
})

export default rewardReducer

// ye is liye banaya h kyo ki agar hume application m jada control chahiye aur ye bhi easy h 
// prefer slices