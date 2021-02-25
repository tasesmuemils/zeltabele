//Main packages
import React from "react";
// Other components
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const StudyPlanStyle = styled.div`
  /* * {
    border: 1px solid red;
  } */

  display: grid;
  justify-content: center;
  padding: 30px 0;

  h1 {
    text-align: center;
    padding-bottom: 5px;
    color: #7e611e;
    padding-bottom: 20px;
  }

  .sp-section {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .sp-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;

      padding: 20px 0 50px;
      border: 10px solid var(--color-5);
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

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

    .celebrations {
      color: var(--white);
      display: grid;
      transform: translateY(-40px);
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      text-align: center;
      background-image: linear-gradient(
        135deg,
        var(--color-5) 30%,
        var(--color-6) 100%
      );
      padding: 30px;
      margin: 0 50px;
      border-radius: 20px;

      p {
        font-size: 17px;
        letter-spacing: 1px;
        color: var(--white);
      }
    }
  }

  // Responsive style
  @media ${device.laptop} {
    .sp-section {
      .sp-wrapper {
        padding: 20px 0 40px;
        ul {
          margin: 10px 0px;

          li {
            margin: 5px 10px;
          }
        }
      }

      .celebrations {
        padding: 30px 10px;
        margin: 0 20px;
      }
    }
  }

  @media ${device.tablet} {
    .sp-section {
      .sp-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;

        /* div:nth-child(3) {
          grid-column: 1 / end;
          justify-self: center;
        } */
      }

      .celebrations {
        padding: 20px 10px;
        margin: 0 10px;

        p {
          font-size: 15px;
        }
      }
    }
  }

  @media ${device.mobileL} {
    padding: 10px 0;
    .sp-section {
      .sp-wrapper {
        grid-template-columns: repeat(1, 1fr);

        div {
          padding: 0px 20px 20px 20px;
        }

        /* div:nth-child(3) {
          grid-column: 2/3;
          justify-self: center;
        } */
      }

      .celebrations {
        grid-template-columns: repeat(1, 1fr);
        padding: 20px 10px;
        margin: 0 10px;

        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export function StudyPlanDesign({ plans }) {
  const StudyPlanData = plans.map(plan => {
    return (
      <div key={plan.node.season} className="wrap-container Main-content">
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
