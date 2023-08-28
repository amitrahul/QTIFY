import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import AutoSuggestion from "../AutoSuggestion/AutoSuggestion";
import styles from "./Search.module.css";
function Search({ placeholder, albumData }) {
  const [val, setVal] = useState(null);
  const [filteredAlbum, setFilteredAlbum] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    setVal(e.target.value);
    let filterData = albumData.filter((album) => {
      return album.title.toLowerCase().includes(e.target.value);
    });
    setFilteredAlbum(filterData);
  };
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          className={styles.search}
          placeholder={placeholder}
          onChange={handleSearch}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>

      {val ? (
        <>
          <AutoSuggestion filteredAlbum={filteredAlbum} />
        </>
      ) : null}
    </>
  );
}

export default Search;
