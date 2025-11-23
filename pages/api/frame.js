export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />

      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://i.seadn.io/gcs/files/2f6843a7e9e35b1f47dba28c3c070014.png" />

      <meta property="fc:frame:button:1" content="Mint (0.0001 ETH)" />
      <meta property="fc:frame:button:1:action" content="tx" />
      <meta property="fc:frame:button:1:target" content="https://jessepunk-frame.vercel.app/api/tx" />
    </head>
    <body>OK</body>
  </html>`);
}
