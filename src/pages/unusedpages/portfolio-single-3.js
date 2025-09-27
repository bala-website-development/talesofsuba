import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PortfolioDetailsHeader from "@/components/PortfolioDetails/PortfolioDetailsHeader";
import PortfolioDetailsInfo from "@/components/PortfolioDetails/PortfolioDetailsInfo";
import PortfolioDetailsVideo from "@/components/PortfolioDetails/PortfolioDetailsVideo";
import PostControl from "@/components/PostControl/PostControl";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PortfolioSingle3 = () => {
  return (
    <Layout pageTitle="Portfolio Details 03">
      <Style />
      <HeaderOne headerStyle="header-style-one header-style-four" />
      <MobileMenu />
      <SearchPopup />
      <PortfolioDetailsHeader />
      <PortfolioDetailsInfo />
      <PortfolioDetailsVideo />
      <PostControl />
      <GallerySectionOne similar />
      <MainFooter />
    </Layout>
  );
};

export default PortfolioSingle3;
