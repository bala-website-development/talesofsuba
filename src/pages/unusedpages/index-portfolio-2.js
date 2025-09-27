import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import PortfolioHorizontal from "@/components/PortfolioHorizontal/PortfolioHorizontal";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import preloader from "@/images/update-26-02-2021/preloader-white.png";
import React from "react";

const PortfolioHome2 = () => {
  return (
    <Layout
      pageTitle="Horizontal Portfolio Two"
      mainClass="page-wrapper__gradient"
      preloaderClass="preloader__gradient"
      preloader={preloader}
    >
      <Style />
      <HeaderOne
        rightMenu
        links={false}
        headerStyle="header-style-one header-style-six header-style-six-no-border"
        logo={9}
      />
      <MobileMenu />
      <SearchPopup />
      <PortfolioHorizontal />
    </Layout>
  );
};

export default PortfolioHome2;
