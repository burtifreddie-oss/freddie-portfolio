import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { MotionProvider } from "@/components/animations/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freddie Burti — Designer",
  description:
    "Designer em São Paulo com mais de 8 anos de experiência. UI/UX, branding e direção de arte orientada por dados.",
  metadataBase: new URL("https://www.freddieburti.com.br"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Freddie Burti — Designer",
    description:
      "Designer em São Paulo com mais de 8 anos de experiência. UI/UX, branding e direção de arte.",
    url: "https://www.freddieburti.com.br",
    siteName: "Freddie Burti",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Freddie Burti — Designer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freddie Burti — Designer",
    description:
      "Designer em São Paulo. UI/UX, branding e direção de arte.",
    images: ["/og-image.jpg"],
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
        <MotionProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
