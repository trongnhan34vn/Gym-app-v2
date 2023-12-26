import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ptAssigns: [],
  selectAssign: null,
  userAssign: null
}

const assignSlice = createSlice({
  name: 'assign',
  initialState: initialState,
  reducers: {
    getPTAssigns: (state, action) => {
      state.ptAssigns = action.payload
    },
    getSelectAssign: (state, action) => {
      state.selectAssign = action.payload
    },
    getUserAssign: (state, action) => {
      state.userAssign = action.payload
    }
  }
})

export default assignSlice.reducer;
export const { getPTAssigns, getSelectAssign, getUserAssign } = assignSlice.actions;