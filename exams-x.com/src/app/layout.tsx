import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const inter = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Exams-X" />
        <meta name="generator" content="Next.js" />
        <meta
          name="keywords"
          content="naec, naec.ge, exams, exams-x, ex, ex-x, gamocdebi, erovnuli, erovnulebi, erovnuli gamocdebi, gamocdebi 2023, gamocdebi 2024, 2023, 2024, testebi, erovnulis testebi, naec.ge testebi, momzadeba, momzadeba gamocdebistvis, momzadeba erovnulebistvis, ertiani erovnuli gamocdebi, naec gamocdebi, gamocdebistvis momzadeba, mzadeba, universiteti, universitetebi, Exams, Exams-X, გამოცდები, ეგზამს-იქს, ეგზამს, ექს-იქს, ეროვნული, ეროვნულები, ეროვნული გამოცდები, გამოცდები 2023,გამოცდები 2024, ტესტები, ეროვნულის ტესტები, ნაეკ ტესტები, მომზადება, მომზადება გამოცდებისთვის, მომზადება ეროვნულებისთვის, ერთიანი ეროვნული გამოცდები, ნაეკ გამოცდები, გამოცდებისთვის მომზადება, მზადება, უნივერსიტეტი, უნივერსიტეტები, math, matematika, momzadeba matematikashi, repetitorebi, repetitori, inglisuri, momzadeba inglisurshi, maswavlebeli, qartuli, momzadeba qartulshi, მათემატიკა, მომზადება მათემატიკაში, რეპეტიტორები, რეპეტიტორი, ინგლისური, მომზადება ინგლისურში, მასწავლებელი, ქართული, მომზადება ქართულში"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="creator" content="Jemal Mtskerashvili" />
        <link rel="icon" href="/ex-x-2.png" />
        <meta
          name="description"
          content="Exams-X პროექტი არის მოსწავლეზე ორიენტირებული და ემსახურება მათ მომზადებას ერთიანი ეროვნული გამოცდებისთვის -  EX-X"
        />
        <title>Exams-X</title>
      </head>
      <body className={inter.className + " dark:text-white"}>
        <Nav />
        <main className="dark:bg-black min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
