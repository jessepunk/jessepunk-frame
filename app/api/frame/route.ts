import { NextResponse } from "next/server";

export async function GET() {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta property="fc:frame" content="vNext" />

      <!-- Frame preview image -->
      <meta property="fc:frame:image" content="https://i.seadn.io/gcs/files/2f6843a7e9e35b1f47dba28c3c070014.png" />

      <!-- Mint button -->
      <meta property="fc:frame:button:1" content="Mint (0.0001 ETH)" />
      <meta property="fc:frame:button:1:action" content="tx" />

      <!-- Call the tx API -->
      <meta property="fc:frame:button:1:target" content="https://YOUR_DEPLOYED_URL/api/tx" />
    </head>
    <body></body>
  </html>`;

  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
