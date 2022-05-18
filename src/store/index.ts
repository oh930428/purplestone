import { configureStore } from '@reduxjs/toolkit';
import { creatorsApi } from './api/creators';
import { otherscoffeeApi } from './api/otherscoffee';

export const store = configureStore({
  reducer: {
    [creatorsApi.reducerPath]: creatorsApi.reducer,
    [otherscoffeeApi.reducerPath]: otherscoffeeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(creatorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
