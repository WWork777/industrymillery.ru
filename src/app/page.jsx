import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import Why from "@/components/Home/Why/Why";
import Category from "@/components/Home/Category/Category";
import News from "@/components/Home/News/News";
import Distributor from "@/components/Home/Distributor/Distributor";
import Slider from "@/components/Home/Slider/Slider";

export default function Home() {

  const products = [
    {
      image: "/images/Products/1.jpg",
      name: "Мыло жидкое антибактериальное, 500 мл",
      link: "/catalog/cleaner-500"
    },
    {
      image: "/images/Products/2.jpg",
      name: "Моющее средство для посуды, 500 мл",
      link: "ya.ru"
    },
    {
      image: "/images/Products/3.jpg",
      name: "Чистящее средство, 500 мл",
      link: "ya.ru"
    },
    {
      image: "/images/product4.jpg",
      name: "Шампунь для волос, 250 мл",
      link: "ya.ru"
    },
    {
      image: "/images/product4.jpg",
      name: "Шампунь для волос, 250 мл",
      link: "ya.ru"
    },
    {
      image: "/images/product4.jpg",
      name: "Шампунь для волос, 250 мл",
      link: "ya.ru"
    },
  ];

  return (
    <>
      <Hero />
      <Why />
      <Category/>
      {/* <Slider title="Для мытья посуды" purpose="для дома"/> */}
      <Slider title="Для себя" purpose="для себя"/>
      <News/>
      <Slider title="Для уборки" purpose="для дома"/>
      <Slider title="Для стирки" purpose="для стирки"/>
      <Distributor/>
    </>
  );
}
