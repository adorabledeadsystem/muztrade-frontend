import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ src, title, description, date, summary }) {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    src: "",
  });

  React.useEffect(() => {
    setData({
      title: title,
      description: description,
      src: src,
    });
  }, []);

  return (
    <>
      <div className="newsCard">
        <div className="newsCard__image">
          <img
            src={"https://api.muztrade.com:4444" + src}
            alt="newscard"
            width={485}
            height={268}
          />
        </div>
        <h3 className="newsCard__title Monrat700"> {date}</h3>
        <p className="newsCard__text Monrat400"> {summary} </p>

        <Link to={"/newscard"} state={{ data: data }}>
          <button className="newsCard__button request Monrat400">
            Читать дальше
          </button>
        </Link>
      </div>
    </>
  );
}
