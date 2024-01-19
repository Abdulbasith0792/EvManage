import AboutUs from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Test from "@/components/test";
import Testimonials from "@/components/testimonials";
import Work from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
 <><Header />
 <AboutUs />
 <Testimonials />
 {/* <Test /> */}
 {/* <Work /> */}
 <Contact />
 <Footer />

 </>
  );
}
