import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exercises: [],
  select: null,
  muscleExercises: [],
}

const exerciseSlice = createSlice(
  {
    name: 'exercise',
    initialState: initialState,
    reducers: {
      getAll: (state, action) => {
        state.exercises = action.payload
      },
      getSelect: (state, action) => {
        state.select = action.payload
      },
      getByMuscleId: (state, action) => {
        state.muscleExercises = action.payload
      }
    }
  }
)

export default exerciseSlice.reducer;
export const { getAll, getSelect, getByMuscleId } = exerciseSlice.actions