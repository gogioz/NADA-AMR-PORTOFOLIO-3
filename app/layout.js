import { Bricolage_Grotesque, Source_Serif_4 } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const text = Source_Serif_4({ subsets: ["latin"], variable: "--font-text" });

export const metadata = {
  title: "Nada Ghonemy | Multimedia Journalist & Video Producer",
  description: "Documentaries, reports, photography and digital storytelling by Nada Ghonemy, a multimedia journalist and video producer in Cairo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
