import Hero from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumData} type="album" title="Top Album" />
      </div>
    </>
  );
}

export default App;
