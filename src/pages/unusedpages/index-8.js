import AboutEleven from "@/components/AboutSection/AboutEleven";
import AboutTen from "@/components/AboutSection/AboutTen";
import CallToSectionFour from "@/components/CallToSection/CallToSectionFour";
import HeaderEight from "@/components/header/HeaderEight";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterEight from "@/components/MainFooter/FooterEight";
import BlogEight from "@/components/NewsSection/BlogEight";
import ProjectEight from "@/components/ProjectSection/ProjectEight";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceEight from "@/components/ServicesSection/ServiceEight";
import SliderEight from "@/components/SliderSection/SliderEight";
import SponsorEight from "@/components/SponsorsSection/SponsorEight";
import TestimonialsEight from "@/components/TestimonialsSection/TestimonialsEight";
import VideoSeven from "@/components/VideoSection/VideoSeven";
import preloader from "@/images/update-01-10-2021/preloader-8.png";
import React from "react";

const Home8 = () => {
  return (
    <Layout pageTitle="Home 08" preloader={preloader}>
      <Style
        font="DM Sans, sans-serif"
        bFont="DM Sans, sans-serif"
        black="#182e65"
        text="#7c8498"
        base="#ffc001"
        baseRgb="255, 192, 1"
        scrollToTopColor="var(--thm-black)"
        blackRgb="24, 46, 101"
      />
      <HeaderEight />
      <MobileMenu />
      <SearchPopup />
      <SliderEight />
      <CallToSectionFour />
      <AboutEleven />
      <ServiceEight />
      <AboutTen />
      <ProjectEight />
      <TestimonialsEight />
      <VideoSeven />
      <BlogEight />
      <SponsorEight />
      <FooterEight />
    </Layout>
  );
};

export default Home8;
