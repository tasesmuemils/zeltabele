import { graphql } from "gatsby";
import React from "react";
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";
import { StudyPlanDesign } from "../../components/StudyPlanDesign";
import { ContentWrapper } from '../../components/ContentWrapper';

export default function kanieruStudyPlan(props) {
    const { edges } = props.data.allSanityKanieruStudyPlans;
  return (
    <>
      <Nav paths={KanieruNav} />
      <Header headerText={`Mācību plāns`} />
      <ContentWrapper>
        <StudyPlanDesign plans={edges} />
      </ContentWrapper>
    </>
  );
}

export const query = graphql`
  query {
    allSanityKanieruStudyPlans(sort: { fields: _createdAt }) {
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