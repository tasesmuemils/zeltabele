// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../components/SEO";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { TeamNav } from "../components/Paths";
import { TeamMembers } from "../components/Team";

export default function contacts({ data }) {
  const KanieruTeamNodes = data.allSanityKanieruTeam.nodes;
  const MieraTeamNodes = data.allSanityMieraTeam.nodes;
  return (
    <div>
      <SEO title="Komanda" />
      <Nav paths={TeamNav} />
      <Header headerText={`Komanda`} />
      <div>
        <div className="wrap-container Main-content">
          <TeamMembers teamMembers={KanieruTeamNodes} />
          <TeamMembers teamMembers={MieraTeamNodes} />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityKanieruTeam(
      filter: { TeamMemberPosition: { ne: "Skolotāja" } }
      sort: { fields: TeamMemberPosition, order: DESC }
    ) {
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
    allSanityMieraTeam(filter: { TeamMemberPosition: { eq: "Vadītāja" } }) {
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
