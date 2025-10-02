import AboutSeven from "@/components/AboutSection/AboutSeven";
import AboutSix from "@/components/AboutSection/AboutSix";
import FunFactSix from "@/components/FunFacts/FunFactSix";
import HeaderSix from "@/components/header/HeaderSix";
import HeaderTwo from "@/components/header/HeaderTwo";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MapSix from "@/components/MapSection/MapSix";
import BlogSix from "@/components/NewsSection/BlogSix";
import ProjectSix from "@/components/ProjectSection/ProjectSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceSix from "@/components/ServicesSection/ServiceSix";
import SliderSix from "@/components/SliderSection/SliderSix";
import SponsorSix from "@/components/SponsorsSection/SponsorSix";
import SubscribeOne from "@/components/SubscribeSection/SubscribeOne";
import VideoSix from "@/components/VideoSection/VideoSix";
import preloader from "@/images/update-01-10-2021/preloader-6.png";
import React from "react";

const Home6 = () => {
  return (
    <Layout pageTitle="Home 06" preloader={preloader}>
      <Style
        font="Kumbh Sans, sans-serif"
        bFont="Kumbh Sans, sans-serif"
        black="#1a3546"
        text="#6b7881"
        base="#41b974"
        baseRgb="65, 185, 116"
        scrollToTopColor="#fff"
      />
      <HeaderSix />
      <HeaderTwo />
      <MobileMenu />
      <SearchPopup />
      <SliderSix />
      <AboutSeven />
      <ServiceSix />
      <SubscribeOne />
      <ProjectSix />
      <FunFactSix />
      <AboutSix />
      <SponsorSix />
      <BlogSix />
      <MapSix />
      <VideoSix />
      <FooterSix />
    </Layout>
  );
};

export default Home6;
