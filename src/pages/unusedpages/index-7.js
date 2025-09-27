import AboutEight from "@/components/AboutSection/AboutEight";
import AboutNine from "@/components/AboutSection/AboutNine";
import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderTwo from "@/components/header/HeaderTwo";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import BlogSeven from "@/components/NewsSection/BlogSeven";
import PricingTwo from "@/components/PricingSection/PricingTwo";
import ProjectSeven from "@/components/ProjectSection/ProjectSeven";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceSeven from "@/components/ServicesSection/ServiceSeven";
import SliderSeven from "@/components/SliderSection/SliderSeven";
import SponsorSeven from "@/components/SponsorsSection/SponsorSeven";
import SubscribeTwo from "@/components/SubscribeSection/SubscribeTwo";
import TestimonialsSeven from "@/components/TestimonialsSection/TestimonialsSeven";
import preloader from "@/images/update-01-10-2021/preloader-7.png";
import React from "react";

const Home7 = () => {
  return (
    <Layout pageTitle="Home 07" preloader={preloader}>
      <Style
        font="Rubik, sans-serif"
        bFont="Rubik, sans-serif"
        black="#2a2833"
        text="#74727a"
        base="#ff4b82"
        baseRgb="255, 75, 130"
        scrollToTopColor="#fff"
        blackRgb="42, 40, 51"
      />
      <HeaderTwo headerStyle="mainmenu-seven" header={7} />
      <MobileMenu />
      <SearchPopup />
      <SliderSeven />
      <ServiceSeven />
      <AboutNine />
      <AboutEight />
      <ProjectSeven />
      <PricingTwo />
      <FunFactSeven />
      <SponsorSeven />
      <TestimonialsSeven />
      <BlogSeven />
      <SubscribeTwo />
      <FooterSeven />
    </Layout>
  );
};

export default Home7;
