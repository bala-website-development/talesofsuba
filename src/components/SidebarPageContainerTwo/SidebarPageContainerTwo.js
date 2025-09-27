import { blogPage } from "@/data/sidebarPageContainerTwo";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SidebarSide from "./SidebarSide";

const BlogDetails = dynamic(() => import("./BlogDetails"));
const ContentSide = dynamic(() => import("./ContentSide"));
const VideoModal = dynamic(() => import("../VideoModal/VideoModal"));

const { videoId } = blogPage;

const SidebarPageContainerTwo = (singleblog) => {
  const [isOpen, setOpen] = useState(false);
  console.log("blogg SidebarPageContainerTwo", singleblog.singleblog);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className="sidebar-page-container">
        <div className="auto-container">
          <Row className="clearfix">
            <Col lg={8} md={12} sm={12} className="content-side">
              <BlogDetails singleblog={singleblog.singleblog} />
            </Col>
            <Col lg={4} md={12} sm={12} className="sidebar-side">
              <SidebarSide blog={(singleblog, singleblog)} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SidebarPageContainerTwo;
