export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta property="fc:frame" content="vNext" />

      <meta property="fc:frame:image" content="https://jessepunk.vercel.app/frame-preview.png" />

      <meta property="fc:frame:button:1" content="Mint Jessepunk (0.0001 ETH)" />
      <meta property="fc:frame:button:1:action" content="tx" />
      <meta property="fc:frame:button:1:target" content="https://YOUR_VERCEL_URL/api/tx" />
    </head>
    <body></body>
  </html>
  `);
}
