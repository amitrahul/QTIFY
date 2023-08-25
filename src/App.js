import Hero from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const generateNewAlbumData = async () => {
    try {
      const newAlbum = await fetchNewAlbums();
      setNewAlbumData(newAlbum);
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumData} type="album" title="Top Album" />
        <Section data={newAlbumData} type="album" title="New Albums" />
      </div>
    </>
  );
}

export default App;
