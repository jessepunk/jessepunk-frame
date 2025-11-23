"use client";

import { useState } from "react";

export default function MintPage() {
  const [qty, setQty] = useState(1);
  const price = 0.0001; // ETH per mint

  const increase = () => setQty((q) => Math.min(10, q + 1));
  const decrease = () => setQty((q) => Math.max(1, q - 1));

  return (
    <main style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 10 }}>Mint Jessepunk</h1>

      <p style={{ marginBottom: 16 }}>Price per mint: 0.0001 ETH</p>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <button onClick={decrease}>-</button>
        <div style={{ fontSize: 20 }}>{qty}</div>
        <button onClick={increase}>+</button>
      </div>

      <div style={{ fontSize: 22, marginBottom: 20 }}>
        Total: {(price * qty).toFixed(6)} ETH
      </div>

      <button
        onClick={async () => {
          const res = await fetch("/api/tx");
          const data = await res.json();
          alert("Mint transaction prepared. Open in Warpcast to complete.");
          console.log(data);
        }}
      >
        Mint {qty} NFT(s)
      </button>

      <p style={{ marginTop: 30, fontSize: 12, opacity: 0.7 }}>
        Contract: 0x67b2E81276a44E573315644Eb1AB26FFD0995e57
      </p>
    </main>
  );
}
