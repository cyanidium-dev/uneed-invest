import About from "@/components/sections/about/About";
import Advantages from "@/components/sections/advantages/Advantages";
import Business from "@/components/sections/business/Business";
import Calculator from "@/components/sections/calculator/Calculator";
import Estimate from "@/components/sections/estimate/Estimate";
import FAQ from "@/components/sections/faq/FAQ";
import Hero from "@/components/sections/hero/Hero";
import Investment from "@/components/sections/investment/Investment";
import Locations from "@/components/sections/locations/Locations";
import Occupancy from "@/components/sections/occupancy/Occupancy";
import Reviews from "@/components/sections/reviews/Reviews";
import Token from "@/components/sections/token/Token";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Locations />
      <Estimate />
      <Occupancy />

      <Advantages />

      <Calculator />
      <Business />

      <Token />
      <Investment />
      <Reviews />
      <FAQ />
    </>
  );
}
