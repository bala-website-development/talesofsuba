import teamSection from "@/data/teamSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTeamThree from "./SingleTeamThree";

const { title, teams } = teamSection;

const TeamThree = ({ className = "", showTitle = true, items = 4 }) => {
  return (
    <section className={`team-three ${className}`}>
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              {title}
              <span className="dot">.</span>
            </h2>
          </div>
        )}
        <Row>
          {teams.slice(0, items).map((team) => (
            <SingleTeamThree key={team.id} team={team} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamThree;
