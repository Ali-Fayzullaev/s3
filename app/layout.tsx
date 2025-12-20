import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "../lib/context";

export const metadata: Metadata = {
  title: "DetailPro - Профессиональный автодетейлинг",
  description:
    "Премиум услуги детейлинга автомобилей в Алматы. Тонировка, керамическое покрытие, полировка и другие услуги с гарантией качества.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
