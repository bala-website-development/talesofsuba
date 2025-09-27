import AboutSectionThree from "@/components/AboutSection/AboutSectionThree";
import BannerSectionFour from "@/components/BannerSection/BannerSectionFour";
import CallToSectionThree from "@/components/CallToSection/CallToSectionThree";
import GallerySectionThree from "@/components/GallerySection/GallerySectionThree";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import LiveSectionTwo from "@/components/LiveSection/LiveSectionTwo";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import NewsSectionTwo from "@/components/NewsSection/NewsSectionTwo";
import Style from "@/components/Reuseable/Style";
import ServiceSectionThree from "@/components/ServicesSection/ServiceSectionThree";
import SponsorsSectionThree from "@/components/SponsorsSection/SponsorsSectionThree";
import TestimonialsSectionThree from "@/components/TestimonialsSection/TestimonialsSectionThree";
import preloader from "@/images/colors/color-7/icons/preloader.png";
import React from "react";

const Home4 = () => {
  return (
    <Layout pageTitle="Home 04" preloader={preloader}>
      <Style
        font="Barlow, sans-serif"
        bFont="Barlow, sans-serif"
        black="#18212e"
        text="#697280"
        base="#ed2c41"
        baseRgb="237, 44, 65"
      />
      <HeaderOne
        topBar
        logo={3}
        headerStyle="header-style-one header-style-seven"
        autoContainer
        links={false}
      />
      <MobileMenu />
      <BannerSectionFour />
      <ServiceSectionThree />
      <AboutSectionThree />
      <GallerySectionThree />
      <LiveSectionTwo />
      <SponsorsSectionThree />
      <TestimonialsSectionThree />
      <NewsSectionTwo />
      <CallToSectionThree />
      <MainFooterTwo />
    </Layout>
  );
};

export default Home4;
