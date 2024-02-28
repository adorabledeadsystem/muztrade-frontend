import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ValueContext } from '../hooks/context'
import arrow from '../assets/arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/slices/photos';

export default function Gallery() {

  const dispatch = useDispatch()
  const { photos } = useSelector(state => state.photos)
  
      React.useEffect(() => {
          dispatch(fetchPhotos())
      }, [])
  

  const SlickArrowRight = ({ className, style, onClick }) => (
      <button><img onClick={onClick} className='slick-next slick-arrow' src={arrow} alt="arrow" width={145} height={145}/></button>
  );
  const SlickArrowLeft = ({ className, style, onClick }) => (
    <button><img onClick={onClick} className='slick-prev slick-arrow' src={arrow} alt="arrow" width={145} height={145}/></button>
  );

  const { setValueSrc } = React.useContext(ValueContext)
  const { setModalValue } = React.useContext(ValueContext)

  const handleImage = (src) => {
    setValueSrc(src)
    setModalValue(true)
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    nextArrow: <SlickArrowRight/>,
    prevArrow: <SlickArrowLeft/>
  };

    return (
      <>
        <div className="gallery" id="gallery">
          <div className="container gallery">
            <h2 className='SansPro500'>Фотографии мероприятий</h2>
            <Slider {...settings}>
              {(photos.items).map((obj, index) => {
                 return(
                      <div key={index} className="img__link" onClick={() => handleImage(obj.imageUrl)}>
                        <img src={'https://api.muztrade.com:4444' + obj.imageUrl} alt={obj.date}/>
                        <span className="img__mask">
                            <h4>{obj.date}</h4>
                            <p>{obj.summary}</p>
                          </span>
                      </div>
                  )
              })}
          </Slider>
          </div>
        </div>
      </>
    );
  }
  
