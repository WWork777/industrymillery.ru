import Image from "next/image";
import Catalog from "@/components/Catalog/Catalog";



export const metadata = {
  title: "Путь странника",
  description: "",
  alternates: {
    canonical: 'https:'
  },
  keywords: [
  ],
    openGraph: {
      title: "Путь странника",
      description: "",
      url: `https:`,
      images: [
          {
              url: `/favicon/favicon-96x96.png`,
              alt: '',
          },
      ],
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
