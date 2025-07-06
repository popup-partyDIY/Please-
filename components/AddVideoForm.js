import { useState } from "react";

export default function AddVideoForm({ onAdd }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const match = url.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (!match) {
      setError("Please enter a valid YouTube URL");
      return;
    }
    setError("");
    onAdd(url);
    setUrl("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 12, marginBottom: 4 }}>
      <input
        type="url"
        placeholder="Paste YouTube video URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        required
        style={{
          width: "80%",
          padding: "10px 14px",
          borderRadius: 10,
          border: "2px solid #ff9800",
          fontSize: 16,
          marginBottom: 8,
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          borderRadius: 10,
          border: "none",
          background: "#ff9800",
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 2px 6px #0006",
        }}
      >
        Add Clip
      </button>
      {error && <div style={{ color: "#ff5555", marginTop: 6 }}>{error}</div>}
    </form>
  );
}
