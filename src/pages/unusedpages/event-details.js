import PageBanner from "@/components/BannerSection/PageBanner";
import EventsDetails from "@/components/EventsSection/EventsDetails";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const EventDetails = () => {
  return (
    <Layout pageTitle="Events Page | Events Details">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Event Details" parent="Events" parentHref="/events" />
      <EventsDetails />
      <MainFooter />
    </Layout>
  );
};

export default EventDetails;
