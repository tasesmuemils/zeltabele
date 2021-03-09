// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";
import Header from "../../components/Header";
import { TeamMembers } from "../../components/Team";

export default function kanieruTeam({ data }) {
  const TeamNodes = data.allSanityMieraTeam.nodes;
  return (
    <div>
      <SEO title="Komanda (Miera iela)" />
      <Nav paths={MieraNav} />
      <Header headerText="Komanda" helperText={`Miera ielas filiāle`}></Header>
      <div>
        <div className="wrap-container Main-content">
          <TeamMembers teamMembers={TeamNodes} />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityMieraTeam(sort: { fields: TeamMemberPosition, order: DESC }) {
      nodes {
        TeamMemberName
        TeamMemberPosition
        TeamMemberDescription
        TeamMemberEducation
        TeamMemberImage {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
