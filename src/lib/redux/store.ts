// src/lib/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import authReducer from '../redux/features/authSlice'
// Optional: if you want to add middleware / devTools config
export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
       auth: authReducer,
      // ... your reducers
    },

    // Good defaults for Next.js
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // ← often needed with nextjs dates, etc.
      }),
  })

// Infer types
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']