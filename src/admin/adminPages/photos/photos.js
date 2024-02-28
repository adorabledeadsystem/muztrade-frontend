import React from "react";
import PhotosCardAdmin from "../../adminComponents/photosCardAdmin";
import search from "../../../assets/search.svg";
import del from "../../../assets/delete.svg";
import Menu from "./../../adminComponents/menu";

import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../../redux/slices/photos";

import { Link } from "react-router-dom";

const Photos = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const clean = () => {
    setSearchValue("");
  };

  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  // if (!isAuth) {
  //   return <Navigate to="/admin" />;
  // }

  return (
    <>
      <div className="wrapperNewsAdmin">
        <div className="menu">
          <Menu />
        </div>

        <div className="wrapperNews">
          <div className="serach_wrap">
            <div className="serach_container">
              <div className="searchBar">
                <img
                  src={search}
                  alt="search"
                  width={10}
                  height={10}
                  className="bar"
                />

                {searchValue && (
                  <img
                    src={del}
                    alt="clean"
                    width={10}
                    height={10}
                    className="del"
                    onClick={clean}
                  />
                )}

                <input
                  placeholder="Название картинки"
                  onChange={onChangeSearchInput}
                  value={searchValue}
                />
              </div>
            </div>

            <div className="create">
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9062 1L13.0951 25"
                  stroke="#121212"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 12.9053L25 13.0942"
                  stroke="#121212"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link to={"/createphoto"}>
                <p> Создать картинку </p>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="content">
              {photos.items
                .filter((obj) =>
                  obj.summary.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((obj, index) => (
                  <PhotosCardAdmin
                    id={obj._id}
                    src={obj.imageUrl}
                    date={obj.date}
                    summary={obj.summary}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Photos };
