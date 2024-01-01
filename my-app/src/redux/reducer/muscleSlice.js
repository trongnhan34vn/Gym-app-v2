import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  muscles: [],
  select: null
}

const muscleSlice = createSlice(
  {
    name: 'muscle',
    initialState: initialState,
    reducers: {
      getAll: (state, action) => {
        state.muscles = action.payload
      },
      getSelect: (state, action) => {
        state.select = action.payload
      }
    }
  }
)

export default muscleSlice.reducer
export const { getAll, getSelect } = muscleSlice.actions