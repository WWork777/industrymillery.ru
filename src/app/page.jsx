import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import Why from "@/components/Home/Why/Why";
import Category from "@/components/Home/Category/Category";
import News from "@/components/Home/News/News";
import Distributor from "@/components/Home/Distributor/Distributor";
import Slider from "@/components/Home/Slider/Slider";

export default function Home() {
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
