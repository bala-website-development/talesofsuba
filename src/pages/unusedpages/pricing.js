import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PricingOne from "@/components/PricingSection/PricingOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Pricing = () => {
  return (
    <Layout pageTitle="Pricing Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Pricing Plans" page="Pricing Page" parent="Page" />
      <PricingOne />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Pricing;
