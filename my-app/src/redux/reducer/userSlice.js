import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginResponse: null
}

const userSlice = createSlice(
  {
    name: 'user',
    initialState: initialState,
    reducers: {
      getLoginResposne: (state, action) => {
        state.loginResponse = action.payload
      }
    }
  }
)

export default userSlice.reducer;
export const { getLoginResposne } = userSlice.actions;
