import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import HistoryTimeline from "@/components/HistorySection/HistoryTimeline";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const History = () => {
  return (
    <Layout pageTitle="Our History">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Our History" page="History" />
      <HistoryTimeline />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default History;
