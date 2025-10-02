import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import React from "react";

const Mission = () => {
  return (
    <Layout pageTitle="Our Mission">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Our Mission" page="Mission" />
      <VideoOne />
      <FeatureSix />
      <FeatureSeven />
      <SponsorsSection />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default Mission;
