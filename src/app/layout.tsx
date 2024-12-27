import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { Jersey_15 } from "next/font/google";
import { Poppins } from "next/font/google";

const Jersey = Jersey_15({
  weight: "400",
  subsets:["latin"],
  variable:"--jersey",
})

const poppins = Poppins({
  subsets:["latin"],
  variable:"--poppins",
  weight: ["400", "500", "700"],
})

const futuraNowHeadline = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaNowHeadline.ttf",
      weight: "400", // Regular weight
    },
    {
      path: "../../public/fonts/FuturaNowHeadlineMedium.ttf",
      weight: "500", // Medium weight
    },
    {
      path: "../../public/fonts/FuturaNowHeadlineBold.ttf",
      weight: "600", // Bold weight
    },
    {
      path: "../../public/fonts/FuturaNowHeadlineBlack.ttf",
      weight: "700", // Bold weight
    },
    {
      path: "../../public/fonts/FuturaNowHeadlineExtraBlack.ttf",
      weight: "800", // Bold weight
    },
  ],
  variable: '--futura', // CSS variable for the font family
  display: 'swap', // Ensures better user experience with fallback fonts
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Aditya Joshi",
  description: "Engineer • Buildooor • Developer",
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-full ${futuraNowHeadline.variable} ${Jersey.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
