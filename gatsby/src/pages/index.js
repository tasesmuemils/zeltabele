import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { MainNav } from "../components/Paths";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

const MainAboutStyle = styled.div`
  /* margin: 50px 200px; */

  .intro {
    border-radius: 20px;
    border-bottom-right-radius: 70px;
    background-color: var(--color-4);
    color: var(--white);
    padding: 50px;
    margin: 5em;
    display: grid;
    justify-content: center;
    text-align: center;
  }

  p {
    font-size: 20px;
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
            <h2>ZELTĀBELE</h2>
            <p>{props.data.homePageInfo.nodes[0].description}</p>
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
        description
      }
    }
  }
`;
