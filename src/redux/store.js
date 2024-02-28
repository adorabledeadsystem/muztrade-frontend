import { configureStore } from "@reduxjs/toolkit";
import {authRuducer} from "./slices/auth";
import {newsReducer} from "./slices/news"
import {photosReducer} from "./slices/photos"

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authRuducer,
    photos: photosReducer,
  },
});

export default store;
