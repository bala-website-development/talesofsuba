import { sidebar } from "@/data/sidebarPageContainer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config.json";

const { title, title2, text, phone, navItems } = sidebar;

const SidebarSide = () => {
  const { pathname } = useRouter();
  const [blog, setBlog] = useState([]);
  const [idpage, setID] = useState(new URLSearchParams(window.location.search).get("id"));
  const [navItems, setBlogRecent] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  useEffect(() => {
    console.log("ssnbloginisde");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    setID(id);
    const type = "bookreview";
    console.log("ssnid", id);
    const fetchData = async () => {
      console.log("ssnbloginisdefetch");
      id === "undefined" ? "a" : id;
      //const response = await axios.get(process.env.NEXT_PUBLIC_SERVICE_URL + "/items/" + id);
      const recentblog = await axios.get(process.env.NEXT_PUBLIC_SERVICE_URL + "/itemsbytype/" + type);
      //setBlog(response.data[0]);
      setBlogRecent(recentblog.data);
      console.log("recent post", recentblog.data);
    };

    fetchData();
  }, [idpage]);
  return (
    <aside className="sidebar blog-sidebar">
      <div className="sidebar-widget search-box">
        <div className="widget-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="search" name="search" placeholder="Search" required />
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
            <h4>Book Review</h4>
          </div>
          <ul>
            {navItems?.map(({ id, slug, title }) => (
              <li key={id} className={pathname.includes(slug) ? "active" : ""}>
                {/* <Link href={""}>{title}</Link> */}
                <Link href={"/bookreview-details?id=" + slug}>{title.substring(0, 30)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-widget call-up">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>talesfsuba</h4>
          </div>
          <div className="text">{config.bookquotes}</div>
          <div className="phone d-none">
            <a href={`tel:${phone.split(" ").join("")}`}>
              <span className="icon flaticon-call"></span>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarSide;
