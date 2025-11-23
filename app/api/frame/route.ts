import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="og:title" content="Mint Jessepunk Legends" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://jessepunk-frame.vercel.app/icon.png" />
          <meta property="fc:frame:button:1" content="Mint 1" />
          <meta property="fc:frame:button:1:action" content="tx" />
          <meta property="fc:frame:button:1:target" content="https://jessepunk-frame.vercel.app/api/tx" />
          <meta property="fc:frame:post_url" content="https://jessepunk-frame.vercel.app/api/frame" />
        </head>
        <body></body>
      </html>
    `,
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}
