import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import EventsOne from "@/components/EventsSection/EventsOne";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Events = () => {
  return (
    <Layout pageTitle="Events Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Events" parent="Page" />
      <EventsOne />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Events;
