import React, { useEffect, createRef, useState } from 'react';
import myVideo from './v1.mp4';

const MainPage = () => {
  const [voidNow, changeVoid] = useState(true);
  const [volume, setVolume] = useState(0.8);

  const onPlayVideo = () => videoRef.current.play();
  const onStopVideo = () => videoRef.current.pause();
  const onPlayVoid = () => changeVoid(!voidNow);
  const onChangeVolume = ({ target }) => {
    let { value } = target;
    setVolume(value);
    videoRef.current.volume = value;
  };

  useEffect(() => {
    // const video = document.querySelector('video');
    // console.log(video);
    // console.log('videoRef', videoRef);
  });

  const videoRef = createRef();

  return (
    <>
      <h2>MainPage</h2>

      <div>
        <video
          ref={videoRef}
          // autoPlay // Включает сразу видео при загрузке
          width={400}
          src={myVideo}
          muted={voidNow}
          controls // Включает встроенные контролы
        ></video>
      </div>

      <button type="button" onClick={onPlayVideo}>
        Play video
      </button>
      <button type="button" onClick={onStopVideo}>
        Pause
      </button>
      <button type="button" onClick={onPlayVoid}>
        {voidNow ? 'Play Void' : 'Stop Void'}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onChangeVolume}
      />
    </>
  );
};

export default MainPage;
