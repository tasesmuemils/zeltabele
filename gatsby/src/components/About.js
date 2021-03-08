// Main packages
import React from "react";
// Other components
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const MieraAboutStyle = styled.div`
  padding: 100px 0 50px 0;

  .about-mission {
    display: grid;
    justify-content: center;

    h2 {
      text-align: center;
      font-weight: 500;
    }

    .about-mission-text {
      display: grid;
      justify-content: center;
      padding: 10px 0 50px 0;
      text-align: center;
      color: var(--color-text);
    }
  }

  .about-main-celebrations {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 30px;

    h2 {
      padding-bottom: 20px;
    }

    .about-main {
      color: var(--color-text);
    }

    .about-celebrations {
      padding-left: 50px;
      ul {
        padding: 0px 20px 20px 20px;
        text-align: left;
        margin-left: 0px;

        li {
          color: var(--color-text);
          font-size: 16px;

          &::marker {
            color: var(--color-headings);
          }
        }
      }
    }
  }

  //Responsive design
  @media ${device.laptopL} {
    padding: 50px 0;
  }

  @media ${device.laptop} {
    .about-main-celebrations {
      padding-top: 20px;
      .about-celebrations {
        padding-left: 20px;
        ul {
          padding: 0px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .about-main-celebrations {
      grid-template-columns: repeat(1, 1fr);
      padding-top: 0px;

      h2 {
        padding-bottom: 10px;
      }

      .about-main {
      }

      .about-celebrations {
        padding-left: 0px;
        padding-top: 20px;
        ul {
          padding: 0px;
          margin-left: 20px;
        }
      }
    }
  }
`;

export default function About({ aboutContent }) {
  return (
    <MieraAboutStyle>
      <div className="wrap-container Main-content">
        <div className="about-mission">
          <h2>{aboutContent[0].AboutDescription_1_title}</h2>
          <div className="about-mission-text">
            <p>{aboutContent[0].AboutDescription_1}</p>
          </div>
        </div>
        <div className="about-main-celebrations">
          <div>
            <h2>{aboutContent[0].AboutDescription_2_title}</h2>
            <p className="about-main">{aboutContent[0].AboutDescription_2}</p>
          </div>
          <div className="about-celebrations">
            <h2>{aboutContent[0].AboutDescription_3_title}</h2>
            <ul>
              {aboutContent[0].AboutDescription_3_party.map(party => {
                return <li key={party}>{party}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </MieraAboutStyle>
  );
}
