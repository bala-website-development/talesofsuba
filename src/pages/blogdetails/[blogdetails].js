import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
//import { blogData } from "@/data/blogData";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import { useRouter } from "next/router";

export async function getServerSideProps({ params, searchParams }) {
  // Fetch data from external API
  const id = params.blogdetails;
  console.log("ssr params", params.blogdetails);
  const res = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items/" + id);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
const BlogSingle = ({ data }) => {
  const { query } = useRouter();
  console.log("ssr data", query);
  const [singleblog, setSingleblog] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      {data.map((event) => (
        <Layout pageTitle={data[0].title} thumbnail={data[0].thumbnail} description={data[0].shortdescription}></Layout>
      ))}
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Details" page="Blog Details" />
      {!loading ? (
        <SidebarPageContainerTwo singleblog={data[0]} />
      ) : (
        <p className="p-5">
          <h5>Please wait while we are loading...</h5>
        </p>
      )}
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter />
    </>
  );
};

export default BlogSingle;
