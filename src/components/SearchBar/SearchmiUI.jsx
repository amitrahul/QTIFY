import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import styles from "./Search.module.css";
const SearchmiUI = ({ albumData, placeholder }) => {
  const [data, setData] = useState(null);
  const chageHandler = (e) => {
    setData(e.target.value);
  };
  const clickHandler = () => {};
  return (
    <div className={styles.wrapper}>
      <Autocomplete
        className={styles.search}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={albumData.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            className={styles.textField}
            {...params}
            label={placeholder}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onChange={chageHandler}
          />
        )}
      />
      <button
        className={styles.searchButton}
        type="submit"
        onClick={clickHandler}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchmiUI;
