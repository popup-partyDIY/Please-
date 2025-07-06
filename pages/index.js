import { useState } from "react";
import Head from "next/head";
import AddVideoForm from "../components/AddVideoForm";
import VideoList from "../components/VideoList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [videos, setVideos] = useState([
    { url: "https://www.youtube.com/embed/a3kzCNMZdvY" }
  ]);

  function handleAddVideo(url) {
    setVideos([{ url }, ...videos]);
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <title>Jasper's Rust Clips</title>
      </Head>
      <div className={styles.bg}>
        <div className={styles.embers}>
          <span className={styles.e1}></span>
          <span className={styles.e2}></span>
          <span className={styles.e3}></span>
        </div>
        <div className={styles.campfireGlow}></div>
        <div className={styles.container}>
          <div className={styles.card}>
            <img
              src="/cover.jpg"
              alt="Jasper's Rust Clips"
              className={styles.logo}
            />
            <h1 className={styles.header}>
              Jasper's Rust Clips
            </h1>
            <AddVideoForm onAdd={handleAddVideo} />
          </div>
          <div className={styles.caption}>
            Survive the night, trust no one, and always keep a rock handy—Jasper’s back in Rust!
          </div>
          <VideoList videos={videos} />
        </div>
      </div>
    </>
  );
}
