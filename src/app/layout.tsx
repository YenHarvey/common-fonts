import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "字体整合项目",
  description: "自用字体集合，方便 CSS 引用。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.className} bg-gradient-to-b from-background-start to-background-end text-foreground min-h-screen flex flex-col`}
      >
        <header className="bg-gray-800 text-white text-center py-4">
          <h1 className="text-3xl font-bold">字体整合项目</h1>
          <p className="text-lg">便捷的 CSS 字体引用集合</p>
        </header>
        <main className="container mx-auto p-4 flex-1">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>版权所有 © {new Date().getFullYear()}，仅供个人使用</p>
        </footer>
      </body>
    </html>
  );
}
