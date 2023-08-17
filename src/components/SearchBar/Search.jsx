import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import styles from "./Search.module.css";
function Search({ placeholder, data }) {
  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

export default Search;
