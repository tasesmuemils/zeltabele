// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";
import { TeamMembers } from "../../components/Team";
import { ContactsInfo } from "../../components/ContactsInfo";

export default function contacts({ data }) {
  const ContactsInfoNodes = data.allSanityKanieruContacts.nodes;
  return (
    <div>
      <SEO title="Sazinies ar Mums (Kaņiera iela)" />
      <Nav paths={KanieruNav} />
      <Header
        headerText="Saznies ar Mums"
        helperText={`Kaņiera ielas filiāle`}
      ></Header>
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
