import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from 'react-dom/client'
import authSlice from './authSlice.js'
import jobSlice from './jobSlice.js'
import companySlice from './companySlice.js'
import applicationSlice from './applicationSlice.js'
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer=combineReducers({
    job:jobSlice,
    auth:authSlice,
    company:companySlice,
    application:applicationSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store=configureStore({
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
