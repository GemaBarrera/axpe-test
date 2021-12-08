import { createSlice } from '@reduxjs/toolkit';

export const marksSlice = createSlice({
  name: 'marks',
  serializableCheck: false,
  initialState: {
    marks: [],
  },
  reducers: {
    addMark: (state, action) => {
      return {
        ...state,
        marks: [...state.marks, action.payload],
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMark } = marksSlice.actions;

export default marksSlice.reducer;