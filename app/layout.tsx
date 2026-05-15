import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HerSfar — The Journey No One Talks About",
  description:
    "HerSfar is an India-first women's wellness platform for perimenopause and menopause, with Lavi AI companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}