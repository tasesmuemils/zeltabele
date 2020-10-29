import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../../components/ContentWrapper";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";

const MieraAboutStyle = styled.div`
  .about-main,
  .about-mission {
    padding: 0px 30px;
  }

  .about-mission {
    display: grid;
    justify-content: center;
    /* text-align: center; */
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
        <ContentWrapper>
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
        </ContentWrapper>
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
