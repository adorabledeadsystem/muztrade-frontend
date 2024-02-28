import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteNews } from "../../redux/slices/news";

export default function NewsCardAdmin({ src, date, summary, id, title }) {
  const dispatch = useDispatch();

  const onClickDelete = (id) => {
    if (window.confirm("Хотите удалить новость?")) {
      dispatch(fetchDeleteNews(id));
    }
  };

  const [data, setData] = React.useState({
    title: "",
    description: "",
    src: "",
  });

  React.useEffect(() => {
    setData({
      title: title,
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
          <Link to={`/editnews/${id}`} state={{ data: data }}>
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
