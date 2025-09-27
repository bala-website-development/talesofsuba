import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import HowItWorksPage from "@/components/HowItWorks/HowItWorksPage";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import React from "react";

const HowItWorks = () => {
  return (
    <Layout pageTitle="How It Works">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="How It Works" />
      <HowItWorksPage />
      <SponsorsSection />
      <ParallaxSection />
      <FeatureEight />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default HowItWorks;
