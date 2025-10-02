import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionFour from "@/components/SponsorsSection/SponsorsSectionFour";
import React from "react";

const Clients = () => {
  return (
    <Layout pageTitle="Clients Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Clients" />
      <SponsorsSectionFour />
      <MainFooter />
    </Layout>
  );
};

export default Clients;
