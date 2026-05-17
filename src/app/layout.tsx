import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freddie Burti — Designer",
  description:
    "Designer em São Paulo com mais de 7 anos de experiência. Transcendendo a estética com a funcionalidade — UI/UX, branding e direção de arte.",
  metadataBase: new URL("https://freddieburti.com"),
  openGraph: {
    title: "Freddie Burti — Designer",
    description:
      "Designer em São Paulo com mais de 7 anos de experiência. Transcendendo a estética com a funcionalidade.",
    url: "https://freddieburti.com",
    siteName: "Freddie Burti",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freddie Burti — Designer",
    description:
      "Designer em São Paulo. Transcendendo a estética com a funcionalidade.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`antialiased ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground grain">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
