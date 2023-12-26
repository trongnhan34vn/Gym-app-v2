import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exercises: [],
}

const exerciseSlice = createSlice(
  {
    name: 'exercise',
    initialState: initialState,
    reducers: {
      getAll: (state, action) => {
        state.exercises = action.payload
      }
    }
  }
)

export default exerciseSlice.reducer;
export const { getAll } = exerciseSlice.actions