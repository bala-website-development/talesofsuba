import AboutSection from "@/components/AboutSection/AboutSection";
import BannerOnePage from "@/components/BannerSection/BannerOnePage";
import CallToSection from "@/components/CallToSection/CallToSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import FunFactsOne from "@/components/FunFacts/FunFactsOne";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import LiveSection from "@/components/LiveSection/LiveSection";
import MainFooter from "@/components/MainFooter/MainFooter";
import MapSection from "@/components/MapSection/MapSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import React from "react";

const OnePage = () => {
  return (
    <Layout pageTitle="Home 03">
      <Style />
      <HeaderOne
        onePage
        logo={2}
        headerStyle="header-style-one header-style-four"
      />
      <MobileMenu onePage />
      <SearchPopup />
      <BannerOnePage />
      <AboutSection />
      <ServicesSectionThree className="services-section-three__one-page" />
      <LiveSection className="live-section__one-page" />
      <WeDOSection />
      <GallerySectionOne />
      <FunFactsOne />
      <TrustedSection />
      <TeamSection onePage />
      <ParallaxSection />
      <TestimonialsSection />
      <SponsorsSection className="sponsors-section__one-page" />
      <NewsSection />
      <GetQuoteTwo className="get-quote-two__one-page" />
      <MapSection fullWidth className="map-section__one-page" />
      <ContactSection className="contact-section__one-page" />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default OnePage;
