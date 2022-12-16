import { configureStore } from '@reduxjs/toolkit';
import PodcastReducer from "../redux/features/podcastSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { loadState } from "./browser-storage";

const persistConfig = {
  key: 'podcast',
  storage,
}

const persistedReducer = persistReducer(persistConfig, PodcastReducer);

export const store = configureStore({
  devTools: true,
  // reducer: persistedReducer,
  reducer: {
    podcast: PodcastReducer
  },
  preloadedState: loadState(),
})

// export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
