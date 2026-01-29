import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "沖縄平和学習ポスターデザイン - 情報デザインI",
  description: "高校1年生 情報デザインI 授業資料サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <PageTransition>
          <main className="flex-grow pt-16">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
