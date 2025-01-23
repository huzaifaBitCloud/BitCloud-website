import Layout from "@/components/Layout";
// import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <Layout>
      <div className="">
        {/* <Hero
          imageUrl="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-37.jpg"
        /> */}
        <ImageCarousel />
      </div>
      <div className="mt-10">
        <OurClients />
      </div>
      <div className="my-10 border-t">
        <WhyUs />
      </div>
      <div className="mt-10">
        <Achievements />
      </div>
      <div className="mt-10 mb-10">
        <Footer />
      </div>
    </Layout>
  );
}
