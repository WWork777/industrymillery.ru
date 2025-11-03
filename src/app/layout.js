import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import RecentViewed from "@/components/RecentViewed/RecentViewed";


const Avenir = localFont({
  src: [
    {
      path: "./fonts/Avenir-Next-reg.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});



export const metadata = {
  title: "Millery - Оптовые поставки жидкого мыла и косметики",
  description: "Официальный поставщик жидкого мыла Millery оптом. Профессиональная моющая и косметическая продукция для бизнеса. Собственное производство, сертификация.",
  alternates: { canonical: "https://industrymillery.ru/" },
  keywords: ["опт жидкое мыло", "Millery оптом", "моющие средства оптом", "косметика для бизнеса", "СТМ производство", "жидкое мыло Millery"],
  openGraph: {
    title: "Millery - Оптовые поставки косметической продукции",
    description: "Профессиональная моющая и косметическая продукция Millery для бизнеса. Собственное производство, выгодные цены.",
    url: "https://industrymillery.ru/",
    images: [{ url: "/images/Hero/fon.jpg", alt: "Millery" }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      
      <head>
        <meta />
      </head>


      <body className={` ${Avenir.variable}`}>
        <div className="page">
          <Header/>
          <div className="page-content">
            {children}
            
          </div>
        </div>
        <RecentViewed />
        <Footer/>
      </body>
    </html>
  );
}
