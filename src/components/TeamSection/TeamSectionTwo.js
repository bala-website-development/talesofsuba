import teamSection from "@/data/teamSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTeam from "./SingleTeam";

const { title, teams } = teamSection;

const TeamSectionTwo = () => {
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>
        <Row className="clearfix">
          {teams.slice(1, 4).map((team) => (
            <SingleTeam
              key={team.id}
              team={team}
              className="col-lg-4 col-md-6 col-sm-12"
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamSectionTwo;
