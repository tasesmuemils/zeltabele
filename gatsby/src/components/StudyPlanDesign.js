import React from "react";
import styled from "styled-components";

const StudyPanStyle = styled.div`
  display: grid;
  justify-content: center;

  h1,
  h2 {
    text-align: center;
  }

  .sp-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  ul {
    padding: 0;
    margin: 10px 20px;
  }

  li {
    list-style: none;

    text-align: center;
    padding: 3px;
    margin: 5px 20px;
  }
`;

export function StudyPlanDesign({ plans }) {
  console.log(plans[0].node.season);
  const StudyPlanData = plans.map(plan => {
    console.log(plan);
    return (
      <div key={plan.node.season} className="wrap-container">
        <StudyPanStyle>
          <h1>{plan.node.season}</h1>
          <div className="sp-wrapper">
            <div>
              <h2>{plan.node.month_1.month}</h2>
              <ul>
                <li>{plan.node.month_1.plan_1}</li>
                <li>{plan.node.month_1.plan_2}</li>
                <li>{plan.node.month_1.plan_3}</li>
              </ul>
            </div>
            <div>
              <h2>{plan.node.month_2.month}</h2>
              <ul>
                <li>{plan.node.month_2.plan_1}</li>
                <li>{plan.node.month_2.plan_2}</li>
                <li>{plan.node.month_2.plan_3}</li>
              </ul>
            </div>
            <div>
              <h2>{plan.node.month_3.month}</h2>
              <ul>
                <li>{plan.node.month_3.plan_1}</li>
                <li>{plan.node.month_3.plan_2}</li>
                <li>{plan.node.month_3.plan_3}</li>
              </ul>
            </div>
          </div>
        </StudyPanStyle>
      </div>
    );
  });

  return <div>{StudyPlanData}</div>;
}
