import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { MainNav } from "../components/Paths";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

const MainAboutStyle = styled.div`
  .intro {
    border-radius: 20px;
    border-bottom-right-radius: 70px;
    margin: 5em;
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;

export default function homePage(props) {
  return (
    <>
      <Nav paths={MainNav} />
      <Header
        headerText={`Privātais bērnu dārzs "Zeltābele"`}
        helperText={`Laimīgai, radošai un drošai bērnībai`}
      ></Header>

      <MainAboutStyle>
        <div className="wrap-container">
          <div className="intro">
            <h2>{props.data.homePageInfo.nodes[0].intro}</h2>
            <p>{props.data.homePageInfo.nodes[0].description}</p>
            <p>{props.data.homePageInfo.nodes[0].description_2}</p>
          </div>
        </div>
      </MainAboutStyle>
    </>
  );
}

export const query = graphql`
  query {
    homePageInfo: allSanityHomePage {
      nodes {
        intro
        description
        description_2
      }
    }
  }
`;
