import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import close from '../../assets/close.svg'

export default function ImageModal({modalClose, valueSrc}) {

  const handleModalClick = event => {
    if (event.target.dataset.layout) {
        modalClose(false)
    }
  }
    return (
      <>
      <div className="imageBackground" onClick={handleModalClick} data-layout>
            <div className="requestClose" onClick={()=>{modalClose(false)}}><img src={close} alt="close" width={31} height={34}></img></div>
        <div className="imageModal">
            <img src={'https://api.muztrade.com:4444' + valueSrc} alt="valueSrc"/>              
        </div>
        </div>
      </>
    );
  }