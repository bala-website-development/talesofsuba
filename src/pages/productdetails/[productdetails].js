import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
    // Fetch data from external API
    const id = params.productdetails;
    console.log("ssr params", params.productdetails);
    const res = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items/" + id);
    const data = await res.json();
    // Pass data to the page via props
    return { props: { data } };
}

const ProductSingle = ({ data }) => {
    const { query } = useRouter();
    console.log("ssr data", query);
    const [loading, setLoading] = useState(false);

    return (
        <>
            {data.map((event) => (
                <Layout key={event.id} pageTitle={event.title} thumbnail={event.thumbnail} description={event.shortdescription}></Layout>
            ))}
            <Style />
            <HeaderOne />
            <MobileMenu />
            <SearchPopup />
            <PageBanner title="Product Details" page="Product Details" />
            {!loading ? (
                <SidebarPageContainerTwo singleblog={data[0]} />
            ) : (
                <div className="p-5">
                    <h5>Please wait while we are loading...</h5>
                </div>
            )}
            <div className="sponsors-section__about-two">
                <br />
                <br />
            </div>
            <MainFooter />
        </>
    );
};

export default ProductSingle;
