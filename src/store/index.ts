import { configureStore } from '@reduxjs/toolkit';
import { creatorsApi } from './api/creators';
import { myCardSlice } from './state/MyCardSlice';
import { createMyCardApi } from './api/createMyCard';
import { otherscoffeeApi } from './api/otherscoffee';

export const store = configureStore({
  reducer: {
    [creatorsApi.reducerPath]: creatorsApi.reducer,
    [createMyCardApi.reducerPath]: createMyCardApi.reducer,
    [otherscoffeeApi.reducerPath]: otherscoffeeApi.reducer,
    myCardReducer: myCardSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(creatorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
