import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDeletePhotos } from "../../redux/slices/photos";

export default function PhotosCardAdmin({ id, src, date, summary }) {
  const dispatch = useDispatch();

  const onClickDelete = (id) => {
    if (window.confirm("Хотите удалить картинку?")) {
      dispatch(fetchDeletePhotos(id));
    }
  };

  const [data, setData] = React.useState({
    summary: "",
    description: "",
    src: "",
  });

  React.useEffect(() => {
    setData({
      date: date,
      summary: summary,
      src: src,
    });
  }, []);

  return (
    <>
      <div className="cardWrapper">
        <div className="newsImage">
          <img
            src={"https://api.muztrade.com:4444" + src}
            alt="news"
            className="image"
          />
        </div>
        <div className="data"> {date} </div>
        <div className="summary">{summary}</div>
        <div className="adminButtons">
          <Link to={`/editphoto/${id}`} state={{ data: data }}>
            <button className="edit"> Редактировать </button>
          </Link>
          <button className="delete" onClick={() => onClickDelete(id)}>
            Удалить
          </button>
        </div>
      </div>
    </>
  );
}
