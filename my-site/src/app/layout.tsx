// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // グローバルCSSがある場合

export const metadata: Metadata = {
  title: "Genbaneco",
  description: "Genbaneco site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
