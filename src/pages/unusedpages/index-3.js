import AboutSectionTwo from "@/components/AboutSection/AboutSectionTwo";
import BannerThree from "@/components/BannerSection/BannerThree";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FeaturesSectionTwo from "@/components/FeaturesSection/FeaturesSectionTwo";
import GallerySection from "@/components/GallerySection/GallerySection";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MapSection from "@/components/MapSection/MapSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TestimonialsSectionTwo from "@/components/TestimonialsSection/TestimonialsSectionTwo";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";

const Home3 = () => {
  return (
    <Layout pageTitle="Home 03">
      <Style />
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <SearchPopup />
      <BannerThree />
      <CallToSectionTwo btnClassName="btn-style-one" />
      <DiscoverSection />
      <ServicesSectionThree />
      <FeaturesSectionTwo />
      <WeWorkSection />
      <TestimonialsSectionTwo />
      <AboutSectionTwo />
      <GallerySection carousel="project-carousel-two" className="alternate" />
      <GetQuoteTwo />
      <MapSection />
      <SponsorsSectionTwo />
      <MainFooter />
    </Layout>
  );
};

export default Home3;
