import BannerFour from "@/components/BannerSection/BannerFour";
import BrandPortfolio from "@/components/BrandPortfolio/BrandPortfolio";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import Style from "@/components/Reuseable/Style";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TestimonialsSix from "@/components/TestimonialsSection/TestimonialsSix";
import preloader from "@/images/colors/color-8/icons/preloader.png";
import React from "react";

const Home5 = () => {
  return (
    <Layout pageTitle="Home 05" preloader={preloader}>
      <Style
        font="Jost, sans-serif"
        bFont="Jost, sans-serif"
        black="#1e1e1e"
        text="#929292"
        base="#e43434"
        baseRgb="228, 52, 52"
        scrollToTopColor="#fff"
        scrollToTopBg="var(--thm-black)"
        scrollToTopHoverColor="var(--thm-black)"
        scrollToTopHoverBg="#fff"
      />
      <HeaderOne
        logo={5}
        headerStyle="header-style-one header-style-eight"
        autoContainer
        links={false}
      />
      <MobileMenu />
      <BannerFour />
      <BrandPortfolio />
      <TestimonialsSix />
      <SponsorsSection />
      <ContactInfos />
      <FooterFour />
    </Layout>
  );
};

export default Home5;
