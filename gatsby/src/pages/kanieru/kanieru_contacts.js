import React from "react";
import { graphql } from "gatsby";
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
      <Header headerText="Saznies ar Mums"></Header>
      <div>
        <div className="wrap-container Main-content">
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
    allSanityKanieruTeam {
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
