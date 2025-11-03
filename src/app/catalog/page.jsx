import Image from "next/image";
import Catalog from "@/components/Catalog/Catalog";



export const metadata = {
  title: "Каталог продукции Millery - Жидкое мыло, моющие средства оптом",
  description: "Полный каталог продукции Millery: жидкое мыло, крем-мыло, моющие средства для бизнеса. Оптовые цены, различные объемы.",
  alternates: { canonical: "https://industrymillery.ru/catalog" },
  keywords: ["каталог Millery", "жидкое мыло оптом", "крем-мыло", "моющие средства каталог", "опт косметики", "продукция Millery"],
  openGraph: {
    title: "Каталог продукции Millery - Оптовые поставки",
    description: "Жидкое мыло, моющие средства и косметика Millery для бизнеса. Широкий ассортимент, выгодные условия.",
    url: "https://industrymillery.ru/catalog",
    images: [{ url: "/images/Hero/fon.jpg", alt: "Millery Каталог" }],
    type: "website",
  },
};

export default function Page({ searchParams }) {
  return (
    <>
        <Catalog
        initialPurpose={searchParams.purpose ?? "all"}
        />
    </>
  );
}
