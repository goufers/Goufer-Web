import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
import authSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  counter: counterSlice,
  Auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
