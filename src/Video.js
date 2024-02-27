import { useImperativeHandle, forwardRef, useRef } from "react";
import video1 from "./videos/video1.mp4";
import "./App.css";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="video-item">
      <video src={video1} width={280} ref={videoRef} />
      <div className="btnControl">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default forwardRef(Video);
