import PageBanner from "@/components/BannerSection/PageBanner";
import ErrorSection from "@/components/ErrorSection/ErrorSection";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const NotFound = () => {
  return (
    <Layout pageTitle="404 Error">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="404 Error" />
      <ErrorSection />
      <MainFooter />
    </Layout>
  );
};

export default NotFound;
