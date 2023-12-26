import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nutritions: [],
}

const nutritionSlice = createSlice(
  {
    name: 'nutrition',
    initialState: initialState,
    reducers: {
      getAll: (state, action) => {
        state.nutritions = action.payload
      }
    }
  }
)

export default nutritionSlice.reducer;
export const { getAll } = nutritionSlice.actions;