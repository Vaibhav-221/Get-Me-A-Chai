import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SessionWraper from "./components/sessionWraper";

export const metadata = {
  title: "Get-Me-A-Chai",
  description: "collect the fung raised by the followers",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <SessionWraper>
        <body className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
          <Navbar />
          <div className="min-h-[80vh] ">{children}</div>
          <Footer />
        </body>
      </SessionWraper>
    </html>
  );
}
