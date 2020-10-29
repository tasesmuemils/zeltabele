import { graphql } from "gatsby";
import React from "react";
import Header from "../../components/Header";
import { StudyPlanDesign } from "../../components/StudyPlanDesign";
import { MieraNav } from "../../components/Paths";
import Nav from "../../components/Nav";
import { ContentWrapper } from "../../components/ContentWrapper";

export default function studyPlan(props) {
  const { edges } = props.data.allSanityMieraStudyPlans;
  return (
    <>
      <Nav paths={MieraNav} />
      <Header headerText={`Mācību plāns`} />
      <ContentWrapper>
        <StudyPlanDesign plans={edges} />
      </ContentWrapper>
    </>
  );
}

export const query = graphql`
  query {
    allSanityMieraStudyPlans(sort: { fields: _createdAt }) {
      edges {
        node {
          season
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
