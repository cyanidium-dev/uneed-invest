import About from "@/components/sections/about/About";
import Estimate from "@/components/sections/estimate/Estimate";
import Hero from "@/components/sections/hero/Hero";
import Locations from "@/components/sections/locations/Locations";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Locations />
      <Estimate />
    </>
  );
}
