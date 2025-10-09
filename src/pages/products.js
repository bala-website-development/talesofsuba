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
  const type = "product";
  console.log("ssr params", "params.blogdetails");
  const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/itemsbytype/" + type);
  console.log("ssr params", response);
  //const sorteddata = response.sort((b, a) => a.date.localeCompare(b.date));
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data } };
}

const BlogGrid = ({ data }) => {
  return (
    <Layout pageTitle="SuBa Products">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="SuBa Home Products" />
      <ProductReviewSection product={data} showTitle={false} isMore />
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter />
    </Layout>
  );
};

export default BlogGrid;
