import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import VideoFile from "../../assets/video.mp4";
import "react-html5video/dist/styles.css";
import close from '../../assets/close.svg'


export default function ModalVideo() {

  const vol = React.useRef();

  React.useEffect(() => {
    vol.current.volume  = 0.2
  }, [])
   
  return (
    <div className="video" >
         <div className="closeVideo" ><img src={close} alt="close" width={31} height={34}></img></div>
      <div className="videoContent" onClick={e => e.stopPropagation()}>
         {/*<Video ref={vol} playsinline autoPlay loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
          <source src={VideoFile} type="video/webm" />
        </Video> */}
        <video ref={vol} src={VideoFile} autoPlay loop controls webkit-playsinline="true" playsinline="true"/>
      </div>
    </div>
  );
}
