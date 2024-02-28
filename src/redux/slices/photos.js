import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const { data } = await axios.get("/photos");
  return data;
});

export const fetchDeletePhotos = createAsyncThunk(
  "news/fetchDeletePhotos",
  async (id) => axios.delete(`/photos/${id}`)
);

const initialState = {
    photos: {
        items: [],
        status: "loading",
    },
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchPhotos.pending]: (state) => { //загрузка
      state.photos.items = [];
      state.photos.status = "loading";
    },

    [fetchPhotos.fulfilled]: (state, action) => {
      state.photos.items = action.payload;
      state.photos.status = "loaded";
    },

    [fetchPhotos.rejected]: (state) => {
      state.photos.items = [];
      state.photos.status = "error";
    },

    [fetchDeletePhotos.pending]: (state, action) => {
      state.photos.items = state.photos.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});



export const photosReducer = photosSlice.reducer;
