import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const { data } = await axios.get("/news");
  return data;
});

export const fetchDeleteNews = createAsyncThunk(
  "news/fetchDeleteNews",
  async (id) => axios.delete(`/news/${id}`)
);

const initialState = {
  news: {
    items: [],
    status: "loading",
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.news.items = [];
      state.news.status = "loading";
    },

    [fetchNews.fulfilled]: (state, action) => {
      state.news.items = action.payload;
      state.news.status = "loaded";
    },

    [fetchNews.rejected]: (state) => {
      state.news.items = [];
      state.news.status = "error";
    },

    [fetchDeleteNews.pending]: (state, action) => {
      state.news.items = state.news.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const newsReducer = newsSlice.reducer;
