import { configureStore } from '@reduxjs/toolkit';

import { myCardApi } from './api/myCard';
import { creatorsApi } from './api/creators';
import { otherscoffeeApi } from './api/otherscoffee';
import { myCardSlice } from './state/MyCardSlice';

export const store = configureStore({
  reducer: {
    [creatorsApi.reducerPath]: creatorsApi.reducer,
    [myCardApi.reducerPath]: myCardApi.reducer,
    [otherscoffeeApi.reducerPath]: otherscoffeeApi.reducer,
    myCardReducer: myCardSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(creatorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
