// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import { StudyPlanDesign } from "../../components/StudyPlanDesign";
import { MieraNav } from "../../components/Paths";
import Nav from "../../components/Nav";

export default function mieraStudyPlan(props) {
  const { edges } = props.data.allSanityMieraStudyPlans;
  return (
    <>
      <SEO title="Mācību plāns (Miera iela)" />
      <Nav paths={MieraNav} />
      <Header headerText={`Mācību plāns`} helperText={`Miera ielas filiāle`} />
      <StudyPlanDesign plans={edges} />
    </>
  );
}

export const query = graphql`
  query {
    allSanityMieraStudyPlans(sort: { fields: _createdAt }) {
      edges {
        node {
          season
          celebrations
          month_1 {
            month
            plan_1
            plan_2
            plan_3
          }
          month_2 {
            month
            plan_1
            plan_2
            plan_3
          }
          month_3 {
            month
            plan_1
            plan_2
            plan_3
          }
        }
      }
    }
  }
`;
