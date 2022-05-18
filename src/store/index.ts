import { configureStore } from '@reduxjs/toolkit';
import { creatorsApi } from './api/creators';
import { contactsApi } from './api/exampleApi';
import { makeMyCardApi } from './api/makeMyCard';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [creatorsApi.reducerPath]: creatorsApi.reducer,
    [makeMyCardApi.reducerPath]: makeMyCardApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
