import AllToolsSection from "@/components/AllToolsSection";
import BrandsSection from "@/components/BrandsSection";
import Contact from "@/components/Contact";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import SolutionsSection from "@/components/SolutionsSection";
import TrustedSection from "@/components/TrustedSection";
import VideoSkeleton from "@/components/VideoSkeleton";

export default function Home() {
  return (
   <div className="w-full h-screen px-5">

     <Navbar/>
     <Hero/>
     <VideoSkeleton/>
     <TrustedSection/>
      <PricingSection />
      <AllToolsSection />
      <SolutionsSection />
      <BrandsSection />
      <FAQSection />
      <Contact/>
     <Footer/>
   </div>

  );
}
