import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoBox.AI Documentation",
  description: "Dokumentasi resmi NoBox.AI",
  icons: {
    icon: "/images/favicon-blue.png",
    shortcut: "/images/favicon-blue.png",
    apple: "/images/favicon-blue.png",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              // Memastikan pencarian mencari ke API yang baru kita buat
              api: "/api/search",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
