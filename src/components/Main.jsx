import React from "react";
import ModalVideo from "./Modal/ModalVideo.jsx";
import { ValueContext } from "./../hooks/context";
import button from "../assets/button.svg";
import play from "../assets/play.svg";
import VideoFile from "../assets/video.mp4";

export default function Main() {
  const [modalActive, setModalActive] = React.useState(false);
  const { setRequestModalValue } = React.useContext(ValueContext);

  return (
    <>
      <div className="main" id="main">
        <div className="blur"></div>
        <video webkit-playsinline="true" playsinline="true" src={VideoFile} autoPlay loop muted className="videoBG" />

        <div className=" mainWrapper">
          <div className=" content ">
              <h1 className="SansPro500">Прокат сценического оборудования</h1>
            <div className="playBtn">
              <div
                className="circleBtn"
                onClick={() => setModalActive(!modalActive)}
              >
                <img
                  className="infinite"
                  src={button}
                  alt="button"
                />

                <img
                  src={play}
                  className="play"
                  alt="play"
                />
                {modalActive && <ModalVideo />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
