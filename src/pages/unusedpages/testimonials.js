import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import TestimonialSectionPage from "@/components/TestimonialsSection/TestimonialSectionPage";
import React from "react";

const Testimonials = () => {
  return (
    <Layout pageTitle="Testimonials">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Testimonials" parent="Page" />
      <TestimonialSectionPage />
      <MainFooter />
    </Layout>
  );
};

export default Testimonials;
