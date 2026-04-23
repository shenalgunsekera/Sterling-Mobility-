import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sterling Mobility",
  description:
    "Sterling Mobility landing page showcasing Geely Livan and Henreymincar."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
