import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
export const initialState = {
  loading: false,
  error: false,
  items: [],
};

// our slice
const itemSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

// export the actions
export const { setLoading, setItems, setError } = itemSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state: { items: any; }) => state.items;

// export the default reducer
export default itemSlice.reducer;

// set up axios - simple json-server prototype config here
const api = axios.create({
  baseURL: "http://api.allorigins.win/get?url=https%3A//itunes.apple.com/us/rss/toppodcasts/limit%3D100/genre_1310/json&callback=?",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// fetch all items
export function fetchItems() {
  return async (dispatch: (arg0: { payload: any; type: "podcasts/setItems" | "podcasts/setError"; }) => void) => {
    api
      .get("/")
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}
