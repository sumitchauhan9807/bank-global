import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer ,persistStore } from 'redux-persist'
import {combineReducers} from "redux";
import adminReducer from './admin'
const persistConfig = {
  key: 'root',
  storage
};
const reducers = combineReducers({
  admin:adminReducer
 });
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  }),
});
export default () => {
  let persistor = persistStore(store)
  return { store, persistor }
}