import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.json";

const BlogSingle = () => {
  const [singleblog, setSingleblog] = useState([]);
  const [loading, setLoading] = useState(false);

  var response;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };
  useEffect(() => {
    const getblogDetails = async () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      id === "undefined" ? "a" : id;
      try {
        setLoading(true);
        await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items/" + id)
          .then((response) => response.json())
          .then((data) => {
            let dataObject = data[0];
            // localStorage.setItem("talesofsubapost", JSON.stringify(dataObject));
            // setSingleblog(JSON.parse(localStorage.getItem("talesofsubapost")));
            setSingleblog(dataObject);
            return;
          })
          .catch((err) => {
            console.log("error", err);
          });
        setLoading(false);
      } catch (er) {
        console.log("error", er);
      }
    };
    getblogDetails();
  }, []);

  return (
    <Layout pageTitle={singleblog.title} thumbnail={singleblog.thumbnail} description={singleblog.shortdescription}>
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Details" page="Blog Details" />
      {!loading ? (
        <SidebarPageContainerTwo singleblog={singleblog} />
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
    </Layout>
  );
};

export default BlogSingle;
