import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
import authSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import favoritesReducer from "../features/favoriteSlice/favoritesSlice";
import GouferProfileSlice from "./GouferProfileSlice";
import { SearchGoufers } from "./SearchGoufersSlice";




const reducers = combineReducers({
  counter: counterSlice,
  Auth: authSlice,
  searchGoufer: SearchGoufers,
  favorites: favoritesReducer,

  gouferProfile: GouferProfileSlice,

});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
