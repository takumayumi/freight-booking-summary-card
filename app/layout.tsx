import classNames from "classnames";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Freight Booking Summary Card | UX/UI Developer Assessment",
  description:
    "A responsive and accessible UI component for displaying freight booking details including origin, destination, vehicle type, and estimated price. Part of a UX/UI Developer test project.",
};

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => null,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          robotoSans.variable,
          robotoMono.variable,
          "flex min-h-screen flex-col items-center justify-items-center font-sans antialiased",
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
