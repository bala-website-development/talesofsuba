import AboutSection from "@/components/AboutSection/AboutSection";
import AgencySection from "@/components/AgencySection/AgencySection";
import BannerOne from "@/components/BannerSection/BannerOne";
import CallToSection from "@/components/CallToSection/CallToSection";
import FunFactsOne from "@/components/FunFacts/FunFactsOne";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import LiveSection from "@/components/LiveSection/LiveSection";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import React from "react";

const boxedHome = () => {
  return (
    <Layout pageTitle="Home 01" mainClass="boxed-wrapper">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BannerOne />
      <ServicesSectionOne />
      <AboutSection />
      <LiveSection />
      <WeDOSection />
      <GallerySectionOne />
      <FunFactsOne />
      <TrustedSection />
      <TeamSection />
      <ParallaxSection />
      <SponsorsSection />
      <AgencySection />
      <NewsSection />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default boxedHome;
