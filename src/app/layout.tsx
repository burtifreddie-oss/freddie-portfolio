import type { Metadata } from "next";
import { Inter, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${bodoni.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground grain">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
