import dynamic from "next/dynamic";

import About from "@/components/sections/about/About";
// import Advantages from "@/components/sections/advantages/Advantages";
// import BotCTA from "@/components/sections/botCTA/BotCTA";
// import Business from "@/components/sections/business/Business";
// import Calculator from "@/components/sections/calculator/Calculator";
// import Estimate from "@/components/sections/estimate/Estimate";
// import FAQ from "@/components/sections/faq/FAQ";
import Hero from "@/components/sections/hero/Hero";

// import Investment from "@/components/sections/investment/Investment";
// import Locations from "@/components/sections/locations/Locations";
// import MidCTA from "@/components/sections/midCTA/MidCTA";
// import Occupancy from "@/components/sections/occupancy/Occupancy";
// import Partnership from "@/components/sections/partnership/Partnership";
// import Reviews from "@/components/sections/reviews/Reviews";
// import Token from "@/components/sections/token/Token";
// import TopCTA from "@/components/sections/topCTA/TopCTA";

const Advantages = dynamic(
  () => import("@/components/sections/advantages/Advantages")
);
const BotCTA = dynamic(() => import("@/components/sections/botCTA/BotCTA"));
const Business = dynamic(
  () => import("@/components/sections/business/Business")
);
const Calculator = dynamic(
  () => import("@/components/sections/calculator/Calculator")
);
const Estimate = dynamic(
  () => import("@/components/sections/estimate/Estimate")
);
const FAQ = dynamic(() => import("@/components/sections/faq/FAQ"));
const Investment = dynamic(
  () => import("@/components/sections/investment/Investment")
);
const Locations = dynamic(
  () => import("@/components/sections/locations/Locations")
);
const MidCTA = dynamic(() => import("@/components/sections/midCTA/MidCTA"));
const Occupancy = dynamic(
  () => import("@/components/sections/occupancy/Occupancy")
);
const Partnership = dynamic(
  () => import("@/components/sections/partnership/Partnership")
);
const Reviews = dynamic(() => import("@/components/sections/reviews/Reviews"));
const Token = dynamic(() => import("@/components/sections/token/Token"));
const TopCTA = dynamic(() => import("@/components/sections/topCTA/TopCTA"));

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
