import { configureStore } from '@reduxjs/toolkit';
import PodcastReducer from "../redux/features/podcastSlice";

import { loadState } from "./browser-storage";

export const store = configureStore({
  devTools: true,
  reducer: {
    podcast: PodcastReducer
  },
  preloadedState: loadState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
