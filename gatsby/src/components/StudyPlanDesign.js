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
    background-color: hsl(213.2142857142857, 48.275862068965516%, 45.490196078431374%);
    background-color: rgb(17, 150, 160);
    color: white;
    margin: 5px 0 20px;
    padding: 20px;
    border-radius: 20px;
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

  .celebrations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    text-align: center;
    background-color: rgba(143, 96, 201, 1);
    box-shadow: rgba(143, 96, 201, 0.5) 0px 4px 15px;
    color: white;
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 20px;
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
          <div className="celebrations">
            {plan.node.celebrations.map(item => {
              return <p>{item}</p>;
            })}
          </div>
        </StudyPanStyle>
      </div>
    );
  });

  return <div>{StudyPlanData}</div>;
}
