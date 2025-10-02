import DemoFeatures from "@/components/DemoFeatures/DemoFeatures";
import DemoGallery from "@/components/DemoGallery/DemoGallery";
import DemoTop from "@/components/DemoTop/DemoTop";
import DemoHeader from "@/components/header/DemoHeader";
import Layout from "@/components/Layout/Layout";
import MainFooterDemo from "@/components/MainFooter/MainFooterDemo";
import Style from "@/components/Reuseable/Style";
import React from "react";

const Home2 = () => {
  return (
    <Layout pageTitle="Home 01">
      <Style />
      <DemoHeader />
      <DemoTop />
      <DemoGallery />
      <DemoFeatures />
      <MainFooterDemo />
    </Layout>
  );
};

export default Home2;
