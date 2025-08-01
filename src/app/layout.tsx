import type { Metadata } from "next";
import { Marcellus, Herr_Von_Muellerhoff } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-herr-von-muellerhoff",
});

export const metadata: Metadata = {
  title: "Rafi & Sunimol Wedding Reception",
  description: "You are cordially invited to the wedding reception of Mohammed Rafi and Sunimol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${herrVonMuellerhoff.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
