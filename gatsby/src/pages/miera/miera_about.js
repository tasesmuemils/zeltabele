// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";
import { device } from "../../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const MieraAboutStyle = styled.div`
  padding: 100px 0;

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
    padding-top: 50px;

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
        margin-left: 30px;

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
  @media ${device.laptop} {
    padding: 50px 0;

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

export default function miera_about(props) {
  const { nodes } = props.data.allSanityMieraAbout;

  // const partyArray = nodes[0].AboutDescription_3.split(",");
  console.log(nodes[0].AboutDescription_3_party);
  return (
    <div>
      <SEO title="Par mums (Miera iela)" />
      <Nav paths={MieraNav} />
      <Header headerText={"Par Mums"} helperText={`Miera ielas filiāle`} />
      <MieraAboutStyle>
        <div className="wrap-container Main-content">
          <div className="about-mission">
            <h2>{nodes[0].AboutDescription_1_title}</h2>
            <div className="about-mission-text">
              <p>{nodes[0].AboutDescription_1}</p>
            </div>
          </div>
          <div className="about-main-celebrations">
            <div>
              <h2>{nodes[0].AboutDescription_2_title}</h2>
              <p className="about-main">{nodes[0].AboutDescription_2}</p>
            </div>
            <div className="about-celebrations">
              <h2>{nodes[0].AboutDescription_3_title}</h2>
              <ul>
                {nodes[0].AboutDescription_3_party.map(party => {
                  return <li key={party}>{party}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </MieraAboutStyle>
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
