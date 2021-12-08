import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import addMarkReducer from '../features/marks/addMarkSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  middleware: customizedMiddleware,
  reducer: {
    state: addMarkReducer,
  },
});