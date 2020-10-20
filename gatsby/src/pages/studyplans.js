import { graphql } from "gatsby";
import React from "react";
import Header from "../components/Header";

export default function studyPlan(props) {
  console.log(props);
  return (
    <>
      <Header headerText={`Mācību plāns`} />
      <div>This is study plans</div>
    </>
  );
}

export const query = graphql`
  query {
    homePageInfo: allSanityHomePage {
      nodes {
        description
      }
    }
  }
`;
