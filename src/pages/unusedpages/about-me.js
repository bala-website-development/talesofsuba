import AboutMeCounter from "@/components/AboutSection/AboutMeCounter";
import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TestimonialsFive from "@/components/TestimonialsSection/TestimonialsFive";
import React from "react";

const AboutMe = () => {
  return (
    <Layout pageTitle="About Me">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About Me" />
      <AboutMeOne />
      <AboutMeCounter />
      <TestimonialsFive />
      <SponsorsSection className="sponsors-section__about-two" />
      <MainFooter />
    </Layout>
  );
};

export default AboutMe;
