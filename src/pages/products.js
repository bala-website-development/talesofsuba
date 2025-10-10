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

export async function getServerSideProps({ params, searchParams, query }) {
  // Fetch data from external API

  const type = "product";
  const search = query?.s || "";
  console.log("ssr params");
  ///products?s=test // search passed like this
  // use it for google search add in sitemap
  console.log("ssr params", query.s);
  const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/itemsbytype/" + type);
  console.log("ssr params", response);
  //const sorteddata = response.sort((b, a) => a.date.localeCompare(b.date));
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data, search } };
}

const BlogGrid = ({ data, search }) => {
  return (
    <Layout pageTitle="SuBa Products">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="SuBa Home Products" />
      <ProductReviewSection product={data} search={search} showTitle={false} isMore />
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter />
    </Layout>
  );
};

export default BlogGrid;
