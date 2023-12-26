import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducer/userSlice';
import assignSlice from './reducer/assignSlice';
import exerciseSlice from './reducer/exerciseSlice';
import nutritionSlice from './reducer/nutritionSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    assign: assignSlice,
    exercise: exerciseSlice,
    nutrition: nutritionSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export default store;