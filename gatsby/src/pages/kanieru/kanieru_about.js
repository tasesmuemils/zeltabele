// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import About from "../../components/About";
import { KanieruNav } from "../../components/Paths";

export default function kanieru_about(props) {
  const { nodes } = props.data.allSanityKanieruAbout;

  return (
    <div>
      <SEO title="Par Mums (Kaņiera iela)" />
      <Nav paths={KanieruNav} />
      <Header headerText={"Par Mums"} helperText={`Kaņiera ielas filiāle`} />
      <About aboutContent={nodes} />
    </div>
  );
}

export const query = graphql`
  query {
    allSanityKanieruAbout {
      nodes {
        AboutDescription_1
        AboutDescription_1_title
        AboutDescription_2
        AboutDescription_2_title
        AboutDescription_3_party
        AboutDescription_3_title
      }
    }
  }
`;
