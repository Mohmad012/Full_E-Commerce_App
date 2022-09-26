import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigUser = {
  key: "rootUser",
  version: 1,
  storage,
};

const persistConfigCart = {
  key: "rootCart",
  version: 1,
  storage,
};

const userPersistedReducer = persistReducer(persistConfigUser, userReducer);
const cartPersistedReducer = persistReducer(persistConfigCart, cartReducer);

const rootReducer = combineReducers({
  user: userPersistedReducer,
  cart: cartPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
