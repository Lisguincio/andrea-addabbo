import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Andrea Addabbo",
  description: "Sicurezza sul lavoro e RSPP a Varese",
  openGraph: {
    title: "Andrea Addabbo",
    description: "Sicurezza sul lavoro e RSPP a Varese",
    url: "https://andreaaddabbo.it",
    siteName: "Andrea Addabbo",
    images: [
      {
        url: "/assets/cover.jpeg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],

    locale: "it_IT",
    type: "website",
  },
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.className} bg-slate-200 text-black`}
    >
      <body>
        <section className="relative min-h-screen max-w-7xl mx-auto px-4 pt-4 2xl:px-0 ">
          <Header />
          <main className="pt-4">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
