import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import ExcellentProducts from "@/components/Products/ExcellentProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <ExcellentProducts />
      <ChooseUs />
    </main>
  );
}
