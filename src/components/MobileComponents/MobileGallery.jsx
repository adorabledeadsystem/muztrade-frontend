import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/slices/photos";
import { ValueContext } from '../../hooks/context'

export default function MobileGallery() {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.photos);

  const { setValueSrc } = React.useContext(ValueContext)
  const { setModalValue } = React.useContext(ValueContext)

  const handleImage = (src) => {
    setValueSrc(src)
    setModalValue(true)
  }

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const [count, setCount] = React.useState(6);
  const [countBool, setCountBool] = React.useState(false);

  const countClick = () => {
    count + 3 >= photos.items.length ? setCountBool(true) : setCountBool(false);
    setCount(count + 3);
  };

  return (
    <>
      <div className="gallery" id="gallery">
        <div className="container gallery">
          <h2 className="gallery__title SansPro500">
            Фотографии <br /> мероприятий
          </h2>
          <div className="gallery__photos">
            {photos.items.filter((item, idx) => idx < count).map((obj, index) => {
              return (
                <div key={index} className="img__link" onClick={() => handleImage(obj.imageUrl)}>
                  <img
                    src={"https://api.muztrade.com:4444" + obj.imageUrl}
                    alt={obj.date}
                    width={516}
                    height={385}
                  />
                </div>
              );
            })}
          </div>
          <button
            className={countBool ? "none" : "news__button request mobile_gallery_button Monrat400"}
            onClick={() => countClick()}
          >
            Еще новости
          </button>
        </div>
      </div>
    </>
  );
}
