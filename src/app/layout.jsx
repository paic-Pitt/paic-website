import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
  themeColor: "#f8f3e9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${bricolage.variable}`}>
      <body>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
