import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Auth from "../admin/auth";
import { News } from "../admin/adminPages/news/news";
import { Photos } from "../admin/adminPages/photos/photos";
import EditNews from "../admin/adminPages/news/editNews";
import EditPhoto from "../admin/adminPages/photos/editPhoto";
import CreateNews from "../admin/adminPages/news/createNews";
import CreatePhoto from "../admin/adminPages/photos/createPhoto";
import NewsCardPage from "../components/NewsCardPage";
import NewsPage from "../components/NewsPage";
import RequestPage from "../components/RequestPage";

import { fetchAuthUser } from "../redux/slices/auth";
import WithAuth from "../hoc/WithAuth";

import { useDispatch } from "react-redux";

import NotFound from "../components/NotFound";

const AppRouter = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Auth />} />

      <Route path="/newscard" element={<NewsCardPage />} />
      <Route path="/newspage" element={<NewsPage />} />
      <Route path="/requestpage" element={<RequestPage />} />

      {/* private */}

      <Route
        path="/news"
        element={
          <WithAuth>
            <News />
          </WithAuth>
        }
      />
      <Route
        path="/photos"
        element={
          <WithAuth>
            <Photos />
          </WithAuth>
        }
      />

      <Route
        path="/createnews"
        element={
          <WithAuth>
            <CreateNews />
          </WithAuth>
        }
      />
      <Route
        path="/createphoto"
        element={
          <WithAuth>
            <CreatePhoto />
          </WithAuth>
        }
      />

      <Route
        path="/editnews/:id"
        element={
          <WithAuth>
            <EditNews />
          </WithAuth>
        }
      />
      <Route
        path="/editphoto/:id"
        element={
          <WithAuth>
            <EditPhoto />
          </WithAuth>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
