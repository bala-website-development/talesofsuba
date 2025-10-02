import { teamPage } from "@/data/teamSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTeamPage from "./SingleTeamPage";

const TeamPage = () => {
  return (
    <section className="team-section">
      <div className="auto-container">
        <Row className="clearfix">
          {teamPage.map((team) => (
            <SingleTeamPage key={team.id} team={team} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamPage;
