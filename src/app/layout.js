import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";
import PhoneEmail from "./components/PhoneEmail";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aspire Engineers",
  description: "Aspire Engineers Pvt. Ltd. is a 33KV authorized service provider with L&T, offering expert ACB/VCB servicing, transformer maintenance, electrical panel installation, and industrial electrical solutions. Trusted for quality, safety, and reliability.",
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-100`}>
        <Navbar/><Whatsapp/>
        <PhoneEmail/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
