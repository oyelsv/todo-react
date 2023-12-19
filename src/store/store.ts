/// <reference types="webpack-env" />

import { configureStore } from '@reduxjs/toolkit';

import { api } from 'features/core/api';
import rootReducer from 'store/rootReducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  });

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./rootReducer', async () => {
      const { default: nextReducer } = await import('./rootReducer');

      store.replaceReducer(nextReducer);
    });
  }

  return { store };
};

export type AppStore = ReturnType<typeof setupStore>['store'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
