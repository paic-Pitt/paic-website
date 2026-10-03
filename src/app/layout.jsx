import { Inter, Fira_Code, Libre_Franklin } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-libre-franklin",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: {
    default: "Panther AI Club",
    template: "%s | Panther AI Club",
  },
  description:
    "Panther AI Club at the University of Pittsburgh connects startups and companies with students from every major to solve real problems with AI.",
};

export const viewport = {
  themeColor: "#092b50",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${libreFranklin.variable} ${firaCode.variable}`}>
      <body>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
