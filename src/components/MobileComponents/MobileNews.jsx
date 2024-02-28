import React from "react";
import MobileNewsCard from "./MobileNewsCard";
import stars from "../../assets/stars.svg";
import line from "../../assets/line.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/slices/news";

export default function MobileNews() {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <div className="background" id="news">
        <div className="news">
          <div className="container news">
            <div className="news__header">
              <img src={stars} alt="about" width={250} height={30} />
              <h2 className="news__title SansPro500">
                Новости нашей <br /> компании
              </h2>
              <img src={line} alt="about" width={114} height={5} />
              <p className="Monrat400">Мероприятия, в которых мы участвовали</p>
            </div>
            <div className="news__container">
              {news.items
                .filter((item, idx) => idx < 6)
                .map((obj, index) => (
                  <MobileNewsCard
                    key={index}
                    id={obj.id}
                    title={obj.title}
                    src={obj.imageUrl}
                    description={obj.description}
                    date={obj.date}
                    summary={obj.summary}
                  />
                ))}
            </div>
            <a href={"/newspage"}>
              <button className="news__button request Monrat400">
                Смотреть все новости
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
