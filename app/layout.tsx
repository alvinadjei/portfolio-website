import '@/app/ui/global.css';
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Alvin Adjei Portfolio',
    default: "Alvin Adjei Portfolio",
  },
    
  description: "Responsive portfolio website highlighting Alvin Adjei's experience and projects. Built with Next.js and TailwindCSS.",
  // keywords: 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-white bg-background ${roboto.variable} ${robotoMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
