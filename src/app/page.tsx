import NavBar from "@/components/NavBar";
import { HeroSection } from "@/components";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";
import Section3 from "@/components/sections/Section3";
import Section2 from "@/components/sections/Section2";
import Footer from "@/components/Footer";

export default function Home() {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <main className="">
      <NavBar />

      {/* Hero Section */}
      <HeroSection bgImg={backgroundImageUrl} />

      {/* Section 2 */}
      <Section2 />

      {/* section 3  */}
      <Section3 />

      {/* section 4 */}
      <Section4 />
      
      {/* section 5 */}
      <Section5 />

      <Footer />
    </main>
  );
}
