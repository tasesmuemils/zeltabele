import React from "react";
import styled from "styled-components";

const StudyPlanStyle = styled.div`
  display: grid;
  justify-content: center;
  padding: 10px 0;

  h1 {
    text-align: center;
    padding-bottom: 5px;
    color: #7e611e;
  }

  .sp-section {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .sp-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      /* background-color: var(--color-5); */
      /* color: white; */
      padding: 20px 0 50px;
      border: 10px solid var(--color-5);
      border-radius: 20px;
      /* box-shadow: 0px 3px 10px 1px black; */

      h2 {
        text-align: center;
        padding-bottom: 5px;
        color: var(--color-text);
      }

      ul {
        padding: 0;
        margin: 10px 20px;

        li {
          list-style: none;
          font-size: 20px;
          text-align: center;
          padding: 3px;
          margin: 5px 20px;
          color: var(--color-text);
        }
      }
    }
  }

  .celebrations {
    display: grid;
    transform: translateY(-40px);
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    text-align: center;
    background-color: var(--color-5);
    padding: 10px;
    margin: 0 50px;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 1px #000000;

    p {
      font-size: 17px;
      letter-spacing: 1px;
      color: var(--color-text-bg);
    }
  }
`;

export function StudyPlanDesign({ plans }) {
  const StudyPlanData = plans.map(plan => {
    return (
      <div key={plan.node.season} className="wrap-container">
        <StudyPlanStyle>
          <h1>{plan.node.season}</h1>
          <div className="sp-section">
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
              {plan.node.celebrations.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
        </StudyPlanStyle>
      </div>
    );
  });

  return <div>{StudyPlanData}</div>;
}
