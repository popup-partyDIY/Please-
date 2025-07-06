export default function VideoList({ videos }) {
  // Always default to an empty array if videos is undefined or null
  const safeVideos = Array.isArray(videos) ? videos : [];

  if (!safeVideos.length)
    return (
      <div
        style={{
          color: "#ffe0b2",
          marginTop: 38,
          fontSize: 18,
          fontWeight: "bold",
          textShadow: "1px 2px 6px #000a",
        }}
      >
        No videos yet. Add your first Rust clip!
      </div>
    );
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 740,
        margin: "40px auto 0",
        display: "flex",
        flexDirection: "column",
        gap: 36,
        alignItems: "center",
      }}
    >
      {safeVideos.map((v, i) => {
        let embedUrl = v.url;

        // If it's not already an embed link, convert it
        const idMatch = v.url.match(/(?:embed\/|v=|youtu\.be\/|v=|shorts\/)([a-zA-Z0-9_-]{11})/);
        if (!v.url.includes("embed") && idMatch) {
          embedUrl = `https://www.youtube.com/embed/${idMatch[1]}`;
        }

        return (
          <div
            key={i}
            style={{
              background: "rgba(20,16,12,0.85)",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 4px 18px #0008",
              width: "90%",
              maxWidth: 680,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <iframe
              width="100%"
              height="360"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: 12,
                boxShadow: "0 2px 10px #0007",
                width: "100%",
                maxWidth: 640,
              }}
            ></iframe>
            <div
              style={{
                color: "#ffcc80",
                marginTop: 8,
                fontSize: 15,
                wordBreak: "break-all",
              }}
            >
              {v.url}
            </div>
          </div>
        );
      })}
    </div>
  );
}
