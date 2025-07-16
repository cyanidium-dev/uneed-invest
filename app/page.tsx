import dynamic from "next/dynamic";

import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";

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
