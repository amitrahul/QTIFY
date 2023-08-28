import React from "react";
import styles from "./AutoSuggestionCard.module.css";
const AutoSuggestionCard = (album) => {
  // console.log(album);
  const { title, image, follows, songs } = album;
  // console.log(title, follows, songs);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.artist}>
        <img src={image} alt={title} className={styles.albumImg} />
        <div>{title}</div>
      </div>
      <div className={styles.follow}>{follows}</div>
    </div>
  );
};

export default AutoSuggestionCard;
