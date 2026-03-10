import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Meghana Ponna - Portfolio",
//   description: "Portfolio of Meghana Ponna – Full Stack Developer specializing in MERN stack, building scalable web applications and backend systems.",
// };

export const metadata = {
  title: {
    default: "Meghana Ponna - Portfolio",
    template: "%s | Meghana Ponna",
  },
  description:
    "Portfolio of Meghana Ponna, Full Stack Developer specializing in MERN stack and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
