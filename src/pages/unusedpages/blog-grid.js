import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import GallerySectionOneBlog from "@/components/GallerySectionBlog/GallerySectionOne";
import React from "react";

const BlogGrid = () => {
  return (
    <Layout pageTitle="Blog Posts">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Posts grid" />
      <NewsSection showTitle={false} isMore />
      {/* <GallerySectionOneBlog /> */}
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter />
    </Layout>
  );
};

export default BlogGrid;
