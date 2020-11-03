import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { Branch } from "../components/Branch";
import { MainNav } from "../components/Paths";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";

const MainAboutStyle = styled.div`
  margin: 0;
  .intro {
    padding: 0 50px;
    display: grid;
    justify-content: center;
    text-align: center;
  }

  p {
    font-size: 25px;
  }
`;

export default function homePage(props) {
  return (
    <>
      <Nav paths={MainNav} />
      <Header
        headerText={`Privātais bērnu dārzs "Zeltābele"`}
        helperText={`Laimīgai, radošai un drošai bērnībai`}
      >
        <Branch />
      </Header>

      <MainAboutStyle>
        <ContentWrapper>
          <div className="wrap-container">
            <div className="intro">
              <h2>ZELTĀBELE</h2>
              <p>{props.data.homePageInfo.nodes[0].description}</p>
            </div>
          </div>
        </ContentWrapper>
      </MainAboutStyle>
    </>
  );
}

export const query = graphql`
  query {
    homePageInfo: allSanityHomePage {
      nodes {
        description
      }
    }
  }
`;
