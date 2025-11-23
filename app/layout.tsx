import "./globals.css";

export const metadata = {
  title: "Jessepunk Marketplace",
  description: "Mint Jessepunk NFTs inside Warpcast or on the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
