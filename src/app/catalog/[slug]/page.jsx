// app/products/[slug]/page.jsx
import { notFound } from "next/navigation";
import ProductPage from "./ProductPage";
import PRODUCTS from "../../../data/Products.json"


const getBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
const abs = (path) => (path?.startsWith("http") ? path : `${path || ""}`);

/** Базовые мета: title/description/keywords + OG/Twitter */
/** Базовые мета ТОЛЬКО по данным товара.
 *  Без универсальной генерации и без обработки 404.
 */
export async function generateMetadata({ params }) {
  const p = getBySlug(params?.slug);

  // Если товар не найден — ничего не генерируем.
  // Страница сама вызовет notFound(), и мета возьмётся из шаблона 404.
  if (!p) return {};

  const title       = p.seoTitle       ?? `${p.name} — купить`;
  const description = p.seoDescription ?? p.short ?? p.desc?.slice(0, 160) ?? p.name;
  const keywordsStr = Array.isArray(p.keywords) ? p.keywords.join(", ") : p.keywords;

  return {
    title,
    description,
    keywords: keywordsStr,
    alternates: { canonical: abs(`/catalog/${p.slug}`) },

    openGraph: {
      title:       p.ogTitle       ?? title,
      description: p.ogDescription ?? description,
      url:         abs(`/catalog/${p.slug}`),
      siteName:    "Каталог",
      images: [{ url: abs(p.ogImage ?? p.image), width: 1200, height: 630, alt: p.name }],
      type: "website", // без product, чтобы не падало
    },

  };
}


/** Server component: получает товар и передаёт в клиентский ProductPage */
export default function ProductPageRoute({ params }) {
  const { slug } = params || {};
  const product = getBySlug(slug);
  if (!product) return notFound();

  const related = PRODUCTS.filter(
    (p) => p.purpose === product.purpose && p.slug !== product.slug
  ).slice(0, 4);

  return <ProductPage product={product} related={related} />;
}
