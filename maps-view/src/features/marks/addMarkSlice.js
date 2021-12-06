import { createSlice } from '@reduxjs/toolkit';

export const addMarkSlice = createSlice({
  name: 'marks',
  initialState: {
    marks: [],
  },
  reducers: {
    addMark: (state, action) => {
      state.marks.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMark } = addMarkSlice.actions;

export default addMarkSlice.reducer;