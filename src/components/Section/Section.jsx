import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Cards from "../Cards/Cards";
import styles from "../Section/Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";
import Box from "@mui/material/Box";

const Section = ({
  title,
  data,
  type,
  filteredDataValues,
  value,
  handleChange,
}) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {type === "song" ? <>{null}</> : !toggle ? "Show all" : "Collapse"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((song) => (
                <Cards key={song?.id} data={song} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              renderCardComponent={(song) => <Cards data={song} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
