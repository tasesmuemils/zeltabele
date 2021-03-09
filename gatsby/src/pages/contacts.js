// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../components/SEO";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { ContactNav } from "../components/Paths";
import { ContactsInfo } from "../components/ContactsInfo";
import StudyCode from "../components/StudyCode";

export default function contacts({ data }) {
  const ContactsInfoNodesKanieru = data.allSanityKanieruContacts.nodes;
  const ContactsInfoNodesMiera = data.allSanityMieraContacts.nodes;
  return (
    <div>
      <SEO title="Sazinies ar Mums" />
      <Nav paths={ContactNav} />
      <Header headerText={`Sazinies ar Mums`} />
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
      <div>
        <div className="wrap-container Main-content">
          <StudyCode />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
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
