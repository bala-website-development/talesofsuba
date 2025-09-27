import PageBanner from "@/components/BannerSection/PageBanner";
import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Checkout = () => {
  return (
    <Layout pageTitle="Checkout Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Checkout Page"
        page="Checkout"
        parent="Shop"
        parentHref="/shop"
      />
      <CheckoutPage />
      <MainFooter />
    </Layout>
  );
};

export default Checkout;
