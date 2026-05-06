import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhySmall from "@/components/WhySmall";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhyWeWin from "@/components/WhyWeWin";
import Founder from "@/components/Founder";
import OurModel from "@/components/OurModel";
import WhoWereLookingFor from "@/components/WhoWereLookingFor";
import Portfolio from "@/components/Portfolio";
import ApplicationForm from "@/components/ApplicationForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhySmall />
        <WhatWeBuild />
        <WhyWeWin />
        <Founder />
        <OurModel />
        <WhoWereLookingFor />
        <Portfolio />
        <ApplicationForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
