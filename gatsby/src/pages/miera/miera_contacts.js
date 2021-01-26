import { graphql } from "gatsby";
import React from "react";
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
      <Nav paths={MieraNav} />
      <Header headerText="Saznies ar Mums" helperText={`Miera ielas filiāle`} />
      <div>
        <div className="wrap-container Main-content">
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
    allSanityMieraTeam {
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
