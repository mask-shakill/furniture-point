import Banner from "@/components/Banner/Banner";
import RecentBlog from "@/components/blogs/RecentBlog";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Contact from "@/components/Contact/Contact";
import ExcellentProducts from "@/components/Products/ExcellentProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <ExcellentProducts />
      <ChooseUs />
      <RecentBlog />
      <Contact />
    </main>
  );
}
