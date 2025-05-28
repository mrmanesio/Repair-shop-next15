import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Repair Shop",
    default: "Repair Shop",
  },
  description: "Repair Shop",
  applicationName: "Repair Shop",
  keywords: ["repair", "shop", "repair shop", "repair shop near me"],
  authors: [{ name: "Repair Shop", url: "https://repairshop.com" }],
  creator: "Repair Shop",
  publisher: "Repair Shop",
  openGraph: {
    title: "Repair Shop",
    description: "Repair Shop",
    url: "https://repairshop.com",
    siteName: "Repair Shop",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Repair Shop" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repair Shop",
    description: "Repair Shop",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://repairshop.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://repairshop.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
