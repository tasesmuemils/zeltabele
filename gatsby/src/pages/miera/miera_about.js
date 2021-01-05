import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";

const MieraAboutStyle = styled.div`
  color: var(--white);

  .about-main {
    /* margin: 20px; */
    background-color: var(--color-5);
    border-radius: 20px;
  }

  .about-main,
  .about-mission {
    padding: 30px;
  }

  .about-mission {
    display: grid;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--color-2);
  }

  .about-mission h3 {
    padding: 20px 0 10px;
  }

  .about-mission-text {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    padding: 20px 0 0;
    text-align: left;
  }

  .about-mission-text ul {
    padding: 30px;
    border-radius: 20px;
    list-style: none;
    background-color: var(--color-5);
    text-align: left;
    font-size: 20px;
    margin-left: 30px;
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
        <div className="wrap-container">
          <p className="about-main">{nodes[0].AboutDescription_1}</p>
          <div className="about-mission">
            <h3>{nodes[0].AboutDescription_2_title}</h3>
            <div className="about-mission-text">
              <p>{nodes[0].AboutDescription_2}</p>
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
