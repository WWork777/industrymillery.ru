import Contracts from "@/components/Contracts/Contracts";

export const metadata = {
  title: "Контракты СТМ Millery",
  description: "Собственное производство под вашим брендом (СТМ). Контрактное производство жидкого мыла и косметики от Millery.",
  alternates: { canonical: "https://industrymillery.ru/contracts" },
  keywords: ["СТМ производство", "private label", "контрактное производство", "собственный бренд", "белая маркировка", "OEM производство"],
  openGraph: {
    title: "Контракты СТМ - Производство под вашим брендом",
    description: "Создайте собственный бренд косметики с Millery. Контрактное производство жидкого мыла и моющих средств под СТМ.",
    url: "https://industrymillery.ru/contracts",
    images: [{ url: "/images/Hero/fon.jpg", alt: "Millery СТМ" }],
    type: "website",
  },
};

export default function Page() {
  return (<Contracts />)
  ;
}