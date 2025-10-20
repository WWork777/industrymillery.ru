import Certificates from "@/components/Certificates/Certificates";

export const metadata = {
  title: "ТДС Сертификаты",
  description: "Сертификаты соответствия и качества компании ТДС.",
  alternates: { canonical: "https://example.com/certificates" },
  keywords: ["сертификаты", "качество", "соответствие", "ТДС"],
  openGraph: {
    title: "ТДС Сертификаты",
    description: "Сертификаты соответствия и качества компании ТДС.",
    url: "https://example.com/certificates",
    images: [{ url: "/favicon/favicon-96x96.png", alt: "TDS" }],
    type: "website",
  },
};

export default function Page() {
  return (<Certificates />)
  ;
}
