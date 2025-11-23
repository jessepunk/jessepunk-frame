export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Jessepunk Legends</h1>
      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Mint Jessepunk NFTs on the web or inside Warpcast.
      </p>

      <a
        href="/mint"
        style={{
          display: "inline-block",
          padding: "12px 18px",
          background: "#111",
          color: "#fff",
          borderRadius: 8,
          fontSize: 16,
        }}
      >
        Go to Mint →
      </a>
    </main>
  );
}
