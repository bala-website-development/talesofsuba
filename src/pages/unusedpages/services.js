import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";

const services = () => {
  return (
    <Layout pageTitle="Services">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      <ServicesSectionThree className="padd-top" />
      <ServicesSectionOne />
      <WeWorkSection />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default services;
