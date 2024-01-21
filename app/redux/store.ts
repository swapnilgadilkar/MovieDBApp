import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {api} from './api/api';
import {appSlice} from './slices/app.slice';

let middlewares = [api.middleware];

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app: appSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(middlewares),
    devTools: true,
    // preloadedState,
  });

export const store = setupStore();
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
