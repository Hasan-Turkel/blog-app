import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from "../features/authSlice"
import blogReducer from "../features/blogSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage/session" 

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    
    blog: blogReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)
export default store
