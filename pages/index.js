import { useState } from "react";
import AddVideoForm from "../components/AddVideoForm";
import VideoList from "../components/VideoList";

export default function Home() {
  const [videos, setVideos] = useState([]);

  function handleAddVideo(url) {
    setVideos([{ url }, ...videos]);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `#15100c url('/cover.jpg') center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          background: "rgba(22,17,13,0.85)",
          borderRadius: 24,
          boxShadow: "0 8px 32px #0009",
          padding: "32px 24px",
          maxWidth: 440,
          textAlign: "center",
        }}
      >
        <img
          src="/cover.jpg"
          alt="Jasper's Rust Clips"
          style={{
            width: "100%",
            maxWidth: 380,
            borderRadius: 20,
            boxShadow: "0 6px 16px #000a",
            marginBottom: 24,
          }}
        />
        <AddVideoForm onAdd={handleAddVideo} />
      </div>
      <VideoList videos={videos} />
    </div>
  );
}
