import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
      <DiscoverSection ShowTitle={false} />
      <TestimonialsSection />
      <FunFacts />
      <ParallaxSection />
      <AgencySection />
      <TeamSectionTwo />
      <SponsorsSectionTwo />
      <MainFooter />
    </Layout>
  );
};

export default About;
