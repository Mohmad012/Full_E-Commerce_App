import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import favReducer from "./favReducer";
import userReducer from "./userReducer";
import modeReducer from "./modeReducer";

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

const persistConfig = (key) => {
  return {
    key,
    version: 1,
    storage,
  };
};

const persistConfigUser = persistConfig("rootUser");
const persistConfigCart = persistConfig("rootCart");
const persistConfigFav = persistConfig("rootFav");
const persistConfigMode = persistConfig("rootMode");

const userPersistedReducer = persistReducer(persistConfigUser, userReducer);
const cartPersistedReducer = persistReducer(persistConfigCart, cartReducer);
const favPersistedReducer = persistReducer(persistConfigFav, favReducer);
const modePersistedReducer = persistReducer(persistConfigMode, modeReducer);

const rootReducer = combineReducers({
  user: userPersistedReducer,
  cart: cartPersistedReducer,
  fav: favPersistedReducer,
  mode: modePersistedReducer,
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
