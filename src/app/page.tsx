import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full h-screen px-5">

     <Navbar/>
     <Hero/>
     <Footer/>
   </div>

  );
}
