import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProductReviewSection from "@/components/BlogReviewSection/ProductReviewSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import GallerySectionOneBlog from "@/components/GallerySectionBlog/GallerySectionOne";
import React from "react";

export async function getServerSideProps({ params, searchParams }) {
  // Fetch data from external API
  const id = "";
  const data = "";
  console.log("ssr params", "params.blogdetails");
  //const res = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items/" + id);
  //const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

const BlogGrid = () => {
  return (
    <Layout pageTitle="SuBa Products">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="SuBa Products" />
      <ProductReviewSection showTitle={false} isMore />
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
