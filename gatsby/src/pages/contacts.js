import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { MainNav } from "../components/Paths";
import { ContactsInfo } from "../components/ContactsInfo";

export default function contacts({ data }) {
  const ContactsInfoNodesKanieru = data.allSanityKanieruContacts.nodes;
  const ContactsInfoNodesMiera = data.allSanityMieraContacts.nodes;
  return (
    <div>
      <Nav paths={MainNav} />
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
