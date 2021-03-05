// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../components/SEO";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { ContactNav } from "../components/Paths";
import { ContactsInfo } from "../components/ContactsInfo";
import { TeamMembers } from "../components/Team";

export default function contacts({ data }) {
  const ContactsInfoNodesKanieru = data.allSanityKanieruContacts.nodes;
  const ContactsInfoNodesMiera = data.allSanityMieraContacts.nodes;
  const KanieruTeamNodes = data.allSanityKanieruTeam.nodes;
  const MieraTeamNodes = data.allSanityMieraTeam.nodes;
  return (
    <div>
      <SEO title="Sazinies ar Mums" />
      <Nav paths={ContactNav} />
      <Header headerText={`Sazinies ar Mums`} />
      <div>
        <div className="wrap-container Main-content">
          <h1
            className="team-title"
            style={{
              textAlign: "center",
              color: "var(--color-headings)",
              padding: "30px 0px",
            }}
          >
            Komanda
          </h1>
          <TeamMembers teamMembers={KanieruTeamNodes} />
          <TeamMembers teamMembers={MieraTeamNodes} />
        </div>
      </div>
      <div>
        <div className="wrap-container Main-content">
          <ContactsInfo
            info={ContactsInfoNodesKanieru}
            latlngForMap={{ lat: 56.914529, lng: 24.170827 }}
          />
        </div>
      </div>
      <div>
        <div className="wrap-container Main-content">
          <ContactsInfo
            info={ContactsInfoNodesMiera}
            latlngForMap={{ lat: 56.966369, lng: 24.134332 }}
          />
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
    allSanityMieraContacts {
      nodes {
        address
        phone
        email
        work_time
      }
    }
    allSanityKanieruContacts {
      nodes {
        address
        phone
        email
        work_time
      }
    }
  }
`;
