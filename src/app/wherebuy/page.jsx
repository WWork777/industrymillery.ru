import WhereBuy from "@/components/WhereBuy/WhereBuy";

export const metadata = {
  title: "Где купить Millery - Дистрибьюторы и точки продаж",
  description: "Официальные дистрибьюторы и точки продаж продукции Millery. Найти где купить жидкое мыло Millery в вашем регионе.",
  alternates: { canonical: "https://industrymillery.ru/wherebuy" },
  keywords: ["где купить Millery", "дистрибьюторы Millery", "точки продаж", "купить жидкое мыло", "поставщики Millery", "региональные представители"],
  openGraph: {
    title: "Где купить продукцию Millery - Дистрибьюторы",
    description: "Найдите официальных дистрибьюторов и точки продаж Millery в вашем регионе. Широкая сеть поставок.",
    url: "https://industrymillery.ru/wherebuy",
    images: [{ url: "/images/Hero/fon.jpg", alt: "Millery Где купить" }],
    type: "website",
  },
};

export default function Page() {
  return (<WhereBuy />)
  ;
}