import { sidebar } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import axios from "axios";
import config from "../../config.json";
import { useRouter } from "next/router";

const { categories, tags, comments, posts } = sidebar;

const SidebarSide = () => {
  const { pathname } = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
    applyFilter(allpost, formData.get("search"));
  };

  const [blogrecent, setBlogRecent] = useState([]);
  const [allpost, setAllPost] = useState([]);
  const [urlslug, setURLSlug] = useState([]);
  useEffect(() => {
    console.log("pathname", pathname);

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");
    console.log("pathname", id);
    const type = pathname.includes("/bookreviewdetails") ? "bookreview" : "blog";
    console.log("ssnid", id);
    setURLSlug(id);
    const fetchData = async () => {
      console.log("ssnbloginisdefetch");
      id === "undefined" ? "a" : id;
      const response = await axios.get(process.env.NEXT_PUBLIC_SERVICE_URL + "/itemsbytype/" + type);
      const sorteddata = response.data.sort((b, a) => a.date.localeCompare(b.date));
      setBlogRecent(sorteddata);
      setAllPost(sorteddata);
      console.log("recent post", sorteddata);
    };

    fetchData();
  }, []);
  const applyFilter = (blogrecent, searchValue) => {
    console.log("searchvalue", searchValue);
    if (searchValue !== "") {
      const filteredData = blogrecent.filter((data) => {
        console.log("searchdata", data);
        return Object.keys(data).some((k) => data[k]?.toString().toLowerCase().includes(searchValue.toLowerCase().trim()));
      });

      setBlogRecent(filteredData);
    } else {
      setBlogRecent(allpost);
    }
    //Paginate();
  };
  return (
    <aside className="sidebar blog-sidebar">
      <div className="sidebar-widget search-box">
        <div className="widget-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="search" name="search" onChange={(e) => applyFilter(blogrecent, e.target.value)} placeholder="Search" required />
              <button type="submit">
                <span className="icon flaticon-magnifying-glass-1"></span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="sidebar-widget services">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>More Topics</h4>
          </div>

          {blogrecent?.map((post) => (
            <ul>
              {/* <figure className="post-thumb">
                <Image src={post.thumbnail} alt="" />
              </figure> */}
              <li key={post.id} className={urlslug === post.slug ? "active" : ""}>
                {pathname.includes("/bookreviewdetails") ? (
                  <a title={post.title} href={"/bookreviewdetails/" + post.slug}>
                    {post.title.substring(0, 30)}
                  </a>
                ) : (
                  <a title={post.title} href={"/blogdetails/" + post.slug}>
                    {post.title.substring(0, 30)}
                  </a>
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="sidebar-widget archives d-none">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Categories</h4>
          </div>
          <ul>
            {categories.map(({ id, title, href }) => (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-widget popular-tags d-none">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Tags</h4>
          </div>
          <div className="tags-list clearfix">
            {tags.map(({ id, title, href }) => (
              <Fragment key={id}>
                <a href={href}>{title}</a>
                {tags.length !== id && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-widget recent-comments d-none">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Comments</h4>
          </div>
          {comments.map(({ id, text }) => (
            <div key={id} className="comment">
              <div className="icon">
                <span className="flaticon-speech-bubble-2"></span>
              </div>
              <h5 className="text">
                <a href="#">
                  <TextSplit text={text} />
                </a>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarSide;
