import React from "react";
import { Button } from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/Search";
import SearchmiUI from "../SearchBar/SearchmiUI";
import styles from "./NavBar.module.css";

export const NavBar = ({ albumData }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search
        placeholder="Search a album of your choice"
        albumData={albumData}
      />
      {/* <SearchmiUI
        albumData={albumData}
        placeholder="Search a album of your choice"
      /> */}
      <Button children={"Give Feedback"} />
    </nav>
  );
};
