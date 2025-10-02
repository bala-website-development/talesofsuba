import BannerSection from "@/components/BannerSection/BannerSection";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import FluidSection from "@/components/FluidSection/FluidSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import GallerySection from "@/components/GallerySection/GallerySection";
import GetQuote from "@/components/GetQuote/GetQuote";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import WhyUs from "@/components/WhyUs/WhyUs";
import React from "react";

const HomeMain = () => {
  return (
    <Layout pageTitle="Home 02">
      <Style />

      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BannerSection />
      <FunFacts />
      <ServicesSection />
      <FeaturedSection />
      <GallerySection />
      <WhyUs />
      <TestimonialsSection />
      <FeaturesSection />
      <GetQuote />
      <SponsorsSection />
      <NewsSection className="alt-bg" />
      <FluidSection />
      <MainFooter />
    </Layout>
  );
};

export default HomeMain;
