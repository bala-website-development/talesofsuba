import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import { digitalMarketing } from "@/data/sidebarPageContainer";
import React from "react";

const DigitalMarketing = () => {
  return (
    <Layout pageTitle="Digital Marketing">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Digital Marketing"
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer service={digitalMarketing} />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default DigitalMarketing;
