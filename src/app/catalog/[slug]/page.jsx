// app/products/[slug]/page.jsx
import { notFound } from "next/navigation";
import ProductPage from "./ProductPage";


/** База товаров — синхронизируй с каталогом */
const PRODUCTS = [
  {
    slug: "cleaner-500",
    name: "Чистящее средство, 500 мл",
    price: 390,
    purpose: "уборка",
    image: "/images/Products/1.jpg",
    short: "Универсальное средство для ежедневной уборки.",
    desc: "Эффективно удаляет загрязнения на кухне и в ванной. Подходит для пластиковых, стальных и каменных поверхностей. Оставляет свежий аромат.",
    specs: ["Объём: 500 мл", "Аромат: свежий", "Без фосфатов", "Для кухни/ванной"],
    keywords: ["чистящее средство", "уборка", "средство для кухни", "универсальное"],
  },
  {
    slug: "shampoo-250",
    name: "Шампунь для волос, 250 мл",
    price: 450,
    purpose: "для дома",
    image: "/img/products/shampoo-250.jpg",
    short: "Деликатный уход для ежедневного применения.",
    desc: "Мягкая формула укрепляет волосы, придаёт блеск и объём. Подходит для всех типов волос.",
    specs: ["Объём: 250 мл", "pH-нейтральный", "Без SLS"],
    keywords: ["шампунь", "уход за волосами", "для дома"],
  },
  {
    slug: "laundry-1l",
    name: "Гель для стирки, 1 л",
    price: 590,
    purpose: "для стирки",
    image: "/img/products/laundry-1l.jpg",
    short: "Концентрированный эко-гель для белого и цветного.",
    desc: "Отстирывает при 30–60°C, сохраняет цвет и структуру ткани. Подходит для детских вещей.",
    specs: ["Объём: 1 л", "30–60°C", "Гипоаллергенно"],
    keywords: ["гель для стирки", "средство для стирки", "эко"],
  },
  {
    slug: "kitchen-500",
    name: "Спрей для кухни, 500 мл",
    price: 420,
    purpose: "уборка",
    image: "/img/products/kitchen-500.jpg",
    short: "Быстро растворяет жир и налёт.",
    desc: "Идеален для плит, вытяжек и рабочих поверхностей. Без агрессивного запаха.",
    specs: ["Объём: 500 мл", "для кухонных поверхностей"],
    keywords: ["спрей для кухни", "жир", "чистящее"],
  },
  {
    slug: "softener-1l",
    name: "Кондиционер для белья, 1 л",
    price: 520,
    purpose: "для стирки",
    image: "/img/products/softener-1l.jpg",
    short: "Мягкость и антистатик, лёгкий аромат.",
    desc: "Смягчает волокна, облегчает глажку, снижает электризацию.",
    specs: ["Объём: 1 л", "антистатик"],
    keywords: ["кондиционер для белья", "смягчитель", "стирка"],
  },
  {
    slug: "showergel-300",
    name: "Гель для душа, 300 мл",
    price: 360,
    purpose: "для дома",
    image: "/img/products/showergel-300.jpg",
    short: "Свежесть и увлажнение на весь день.",
    desc: "Мягко очищает кожу, поддерживает естественный pH-баланс.",
    specs: ["Объём: 300 мл", "для чувствительной кожи"],
    keywords: ["гель для душа", "уход за телом", "гигиена"],
  },
];

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
