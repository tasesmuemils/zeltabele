// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import About from "../../components/About";
import { MieraNav } from "../../components/Paths";

export default function miera_about(props) {
  const { nodes } = props.data.allSanityMieraAbout;

  return (
    <div>
      <SEO title="Par mums (Miera iela)" />
      <Nav paths={MieraNav} />
      <Header headerText={"Par Mums"} helperText={`Miera ielas filiāle`} />
      <About aboutContent={nodes} />
    </div>
  );
}

export const query = graphql`
  query {
    allSanityMieraAbout {
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
