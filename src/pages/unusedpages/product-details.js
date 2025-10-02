import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductDetailsPage from "@/components/ProductDetails/ProductDetailsPage";
import Style from "@/components/Reuseable/Style";
import ReviewForm from "@/components/ReviewSection/ReviewForm";
import ReviewOne from "@/components/ReviewSection/ReviewOne";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const ProductDetails = () => {
  return (
    <Layout pageTitle="Product Details Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Product Details" page="Shop" />
      <ProductDetailsPage />
      <ProductDescription />
      <ReviewOne />
      <ReviewForm />
      <MainFooter />
    </Layout>
  );
};

export default ProductDetails;
