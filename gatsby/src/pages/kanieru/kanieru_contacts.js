// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";
import { TeamMembers } from "../../components/Team";
import { ContactsInfo } from "../../components/ContactsInfo";

export default function contacts({ data }) {
  const ContactsInfoNodes = data.allSanityKanieruContacts.nodes;
  const TeamNodes = data.allSanityKanieruTeam.nodes;
  return (
    <div>
      <Nav paths={KanieruNav} />
      <Header
        headerText="Saznies ar Mums"
        helperText={`Kaņiera ielas filiāle`}
      ></Header>
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
            latlngForMap={{ lat: 56.914529, lng: 24.170827 }}
          />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityKanieruTeam(sort: { fields: TeamMemberPosition, order: DESC }) {
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
