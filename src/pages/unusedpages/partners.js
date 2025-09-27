import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PartnerOne from "@/components/PartnerSection/PartnerOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Partners = () => {
  return (
    <Layout pageTitle="How It Works">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="our process" page="process" parent="Page" />
      <PartnerOne />
      <CallToSection container={false} className="call-to-section__no-margin" />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Partners;
