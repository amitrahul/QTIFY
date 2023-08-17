import React from "react";
import { Button } from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/Search";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button children={"Give Feedback"} />
    </nav>
  );
};
