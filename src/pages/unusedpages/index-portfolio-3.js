import HeaderThree from "@/components/header/HeaderThree";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import PortfolioHorizontalTwo from "@/components/PortfolioHorizontal/PortfolioHorizontalTwo";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import preloader from "@/images/colors/color-9/icons/preloader.png";
import React from "react";

const PortfolioHome3 = () => {
  return (
    <Layout pageTitle="Horizontal Portfolio Three" preloader={preloader}>
      <Style
        font="Roboto Condensed"
        bFont="Roboto Condensed"
        base="#2398f9"
        baseRgb="35, 152, 249"
        black="#1f1f1f"
        text="#838383"
        gray="#f8f8f8"
      />
      <HeaderThree />
      <MobileMenu />
      <SearchPopup />
      <PortfolioHorizontalTwo />
    </Layout>
  );
};

export default PortfolioHome3;
