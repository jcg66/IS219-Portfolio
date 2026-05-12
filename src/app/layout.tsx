import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Forward Systems Engineer",
  description: "Portfolio of an AI-Forward Systems Engineer specializing in automated threat intelligence and RAG-based orchestration.",
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
