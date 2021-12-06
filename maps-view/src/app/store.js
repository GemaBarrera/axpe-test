import { configureStore } from '@reduxjs/toolkit';
import addMarkReducer from '../features/marks/addMarkSlice';

export default configureStore({
  reducer: {
    marks: addMarkReducer,
  },
});