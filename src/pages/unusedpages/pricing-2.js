import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PricingThree from "@/components/PricingSection/PricingThree";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import React from "react";

const Pricing2 = () => {
  return (
    <Layout pageTitle="Pricing Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Pricing Plans" page="Pricing Page" parent="Page" />
      <PricingThree />
      <SponsorsSection className="sponsors-section__pricing-two" />
      <MainFooter />
    </Layout>
  );
};

export default Pricing2;
