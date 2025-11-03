import Certificates from "@/components/Certificates/Certificates";

export const metadata = {
  title: "Сертификаты качества Millery - Документация и соответствие",
  description: "Сертификаты соответствия и качества продукции Millery. Вся необходимая документация на моющие средства и косметику.",
  alternates: { canonical: "https://industrymillery.ru/certificates" },
  keywords: ["сертификаты Millery", "качество продукции", "документация", "соответствие стандартам", "сертификаты качества", "СанПиН"],
  openGraph: {
    title: "Сертификаты качества Millery",
    description: "Официальные сертификаты соответствия и качества на всю продукцию Millery. Гарантия безопасности и стандартов.",
    url: "https://industrymillery.ru/certificates",
    images: [{ url: "/images/Hero/fon.jpg", alt: "Millery Сертификаты" }],
    type: "website",
  },
};

export default function Page() {
  return (<Certificates />)
  ;
}
