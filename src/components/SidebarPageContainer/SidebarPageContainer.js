import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentSide from "./ContentSide";
import SidebarSide from "./SidebarSide";

const SidebarPageContainer = ({ service = {} }) => {
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={8} md={12} sm={12} className="content-side">
            <ContentSide service={service} />
          </Col>
          <Col lg={4} md={12} sm={12} className="sidebar-side">
            <SidebarSide />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SidebarPageContainer;
