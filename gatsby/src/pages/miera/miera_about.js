import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";

const MieraAboutStyle = styled.div`
  .about-mission {
    display: grid;
    justify-content: center;

    h2 {
      text-align: center;
      font-weight: 500;
      color: green;
    }

    .about-mission-text {
      display: grid;
      justify-content: center;
      padding: 10px 0 50px 0;
      text-align: center;
    }
  }

  .about-main-celebrations {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0 0 0;

    .about-main {
      border-radius: 20px;
    }

    h2 {
      padding-bottom: 20px;
    }

    ul {
      padding: 0px 20px 20px 20px;
      border-radius: 20px;
      text-align: left;
      font-size: 20px;
      margin-left: 30px;

      li {
        color: var(--color-text);
      }
    }
  }
`;

export default function miera_about(props) {
  const { nodes } = props.data.allSanityMieraAbout;

  const partyArray = nodes[0].AboutDescription_3.split(",");
  return (
    <div>
      <Nav paths={MieraNav} />
      <Header headerText={"Par Mums"} helperText={`Miera ielas filiāle`} />
      <MieraAboutStyle>
        <div className="wrap-container Main-content">
          <div className="about-mission">
            <h2>{nodes[0].AboutDescription_2_title}</h2>
            <div className="about-mission-text">
              <p>{nodes[0].AboutDescription_2}</p>
            </div>
          </div>
          <div className="about-main-celebrations">
            <div>
              <h2>Ikdiena bērnudārzā</h2>
              <p className="about-main">{nodes[0].AboutDescription_1}</p>
            </div>
            <div>
              <h2>Svētku dienas</h2>
              <ul>
                {partyArray.map(party => {
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
        AboutDescription_2_title
        AboutDescription_2
        AboutDescription_3
      }
    }
  }
`;
