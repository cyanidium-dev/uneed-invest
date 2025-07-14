import About from "@/components/sections/about/About";
import Advantages from "@/components/sections/advantages/Advantages";
import BotCTA from "@/components/sections/botCTA/BotCTA";
import Business from "@/components/sections/business/Business";
import Calculator from "@/components/sections/calculator/Calculator";
import Estimate from "@/components/sections/estimate/Estimate";
import FAQ from "@/components/sections/faq/FAQ";
import Hero from "@/components/sections/hero/Hero";
import Investment from "@/components/sections/investment/Investment";
import Locations from "@/components/sections/locations/Locations";
import MidCTA from "@/components/sections/midCTA/MidCTA";
import Occupancy from "@/components/sections/occupancy/Occupancy";
import Partnership from "@/components/sections/partnership/Partnership";
import Reviews from "@/components/sections/reviews/Reviews";
import Token from "@/components/sections/token/Token";
import TopCTA from "@/components/sections/topCTA/TopCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Locations />
      <Estimate />
      <Occupancy />
      <TopCTA />
      <Advantages />
      <Partnership />
      <Calculator />
      <Business />
      <MidCTA />
      <Token />
      <Investment />
      <Reviews />
      <FAQ />
      <BotCTA />
    </>
  );
}
