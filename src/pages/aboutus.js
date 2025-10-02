import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import config from "../config.json";

const Process = () => {
  return (
    <Layout pageTitle="About us" thumbnail={config.favicon}>
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="about us" page="aboutus" />
      <ProcessOne />
      {/* <CallToSection /> */}
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Process;
