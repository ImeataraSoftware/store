import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';

import { Auth } from '../services/Auth';

export const store = configureStore({
  reducer: {
    [Auth.reducerPath]: Auth.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Auth.middleware),
});

setupListeners(store.dispatch);
