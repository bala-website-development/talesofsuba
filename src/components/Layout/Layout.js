import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import config from "../../config.json";

const Layout = ({ children, pageTitle, preloader, mainClass, preloaderClass, thumbnail, description, icon, themecolor }) => {
  const defaulttitle = "Tales of SuBa | Books Review | Blogs";
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(pageTitle);
  const [description1, setDescription] = useState(null);
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    console.log("ssr title", pageTitle);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);
    console.log("ssr pagedescription", thumbnail);
    console.log("ssr pagedescription", description);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" itemprop="image" content={thumbnail} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Tales of SuBa" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="Book Review, Romance Books, Fiction 
          Books, Bookreview, Good Story books, top book review, tales of suba, talesofsuba, tales of suba blogs"
        />
        <meta name="theme-color" content={themecolor} />
        <link rel="apple-touch-icon" href={icon} />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7F27M995N4"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
      </Head>
      <Preloader className={preloaderClass} loading={loading} bg={preloader} />
      <main id="wrapper" style={{ opacity: loading ? 0 : 1 }} className={`page-wrapper ${mainClass}`}>
        {children}
      </main>
      {scrollTop && (
        <ScrollLink to="wrapper" smooth={true} duration={500} id="backToTop" style={{ cursor: "pointer" }} className="scroll-to-target scroll-to-top d-inline-block fadeIn animated">
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
// or Dynamic metadata
