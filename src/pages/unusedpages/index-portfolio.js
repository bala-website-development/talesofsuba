import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterThree from "@/components/MainFooter/MainFooterThree";
import PortfolioMasonary from "@/components/PortfolioMasonary/PortfolioMasonary";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import React from "react";

const HomePortfolio = () => {
  return (
    <Layout pageTitle="Home 03" mainClass="page-wrapper__dark">
      <Style />
      <HeaderOne
        rightMenu
        links={false}
        headerStyle="header-style-one header-style-six"
      />
      <MobileMenu />
      <SearchPopup />
      <PortfolioMasonary />
      <SponsorsSection className="sponsors-section__dark sponsors-section__has-border-top" />
      <MainFooterThree />
    </Layout>
  );
};

export default HomePortfolio;
