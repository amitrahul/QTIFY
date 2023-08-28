import React from "react";
import songImage from "../../assets/songImage.png";
import playBtn from "../../assets/playBtn.png";
import style from "./SongPlayer.module.css";
const SongPlayer = () => {
  return (
    <div className={style.songPlayerWrapper}>
      <div className={style.songDescr}>
        <img src={songImage} alt="song" className={style.songimg} />
        <div className={style.songName}>
          <h3>Song name</h3>
          <h4>Album name</h4>
        </div>
      </div>
      <div className={style.musicPlayer}>
        <img src={playBtn} alt="Music play" />
        <div className={style.progressElement}>
          <p>0:38</p>
          <div className={style.progressBar}>
            <div className={style.playTime}></div>
          </div>
          <p>3:38</p>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
