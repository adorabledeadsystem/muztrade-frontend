import React from "react";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/slices/news";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function NewsPage() {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const [count, setCount] = React.useState(6);
  const [countBool, setCountBool] = React.useState(false);

  const countClick = () => {
    count + 3 >= news.items.length ? setCountBool(true) : setCountBool(false);
    setCount(count + 3);
  };

  return (
    <>
      <header className="newsCardHeader">
        <div className="newsCardWrapper">
          <Link to={'/'}>
            <img src={logo} className="logo" alt="logo" width={210} height={80} />
          </Link>
          <a href="/">
            <button className="request">Вернуться</button>
          </a>
        </div>
      </header>
      <div className="background backgroundPage">
        <div className="container news newsPage">
          <div className="news__header">
            <h2 className="news__title newsPage__title SansPro500">
              Новости нашей компании
            </h2>
          </div>
          <div className="news__container newsPage__container">
            {news.items
              .filter((item, idx) => idx < count)
              .map((obj, idx) => {
                return (
                  <>
                    <NewsCard
                      key={idx}
                      id={obj.id}
                      title={obj.title}
                      src={obj.imageUrl}
                      description={obj.description}
                      date={obj.date}
                      summary={obj.summary}
                    ></NewsCard>
                  </>
                );
              })}
          </div>

          <button
            className={countBool ? "none" : "news__button request Monrat400"}
            onClick={() => countClick()}
          >
            Еще новости
          </button>
        </div>
      </div>
    </>
  );
}
