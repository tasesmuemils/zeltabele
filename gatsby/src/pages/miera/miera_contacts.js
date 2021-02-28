// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";
import { TeamMembers } from "../../components/Team";
import { ContactsInfo } from "../../components/ContactsInfo";

export default function contacts({ data }) {
  const ContactsInfoNodes = data.allSanityMieraContacts.nodes;
  const TeamNodes = data.allSanityMieraTeam.nodes;

  return (
    <div>
      <SEO title="Sazinies ar Mums (Miera iela)" />
      <Nav paths={MieraNav} />
      <Header headerText="Saznies ar Mums" helperText={`Miera ielas filiāle`} />
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
          <TeamMembers teamMembers={TeamNodes} />
        </div>
      </div>
      <div>
        <div className="wrap-container Main-content">
          <ContactsInfo
            info={ContactsInfoNodes}
            latlngForMap={{ lat: 56.966369, lng: 24.134332 }}
          />
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
    allSanityMieraContacts {
      nodes {
        address
        phone
        email
        work_time
      }
    }
  }
`;
