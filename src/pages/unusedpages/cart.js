import PageBanner from "@/components/BannerSection/PageBanner";
import CartPage from "@/components/CartPage/CartPage";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Cart = () => {
  return (
    <Layout pageTitle="Cart Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Cart Page"
        page="Cart"
        parent="Shop"
        parentHref="/shop"
      />
      <CartPage />
      <MainFooter />
    </Layout>
  );
};

export default Cart;
