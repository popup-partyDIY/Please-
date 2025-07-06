import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function AddVideoForm({ onAdd }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <input
        type="text"
        className={styles.inputBox}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Paste YouTube video URL"
        autoFocus
      />
      <button type="submit">Add Clip</button>
    </form>
  );
}
