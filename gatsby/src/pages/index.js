import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { graphql } from "gatsby";

const BranchStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  justify-content: space-around;
  text-align: center;
  transform: translateY(-50px);

  .branch {
    background-color: rgba(250, 252, 65);
  }
`;

export default function homePage(props) {
  return (
    <div>
      <Header headerText={`Bērnu dārzs "Zeltābele"`} />
      <BranchStyle>
        <div className="branch">
          <h2>Branch 1</h2>
          <p>Apskatīt</p>
        </div>
        <div className="branch">
          <h2>Branch 2</h2>
          <p>Apskatīt</p>
        </div>
      </BranchStyle>
      <div>
        <h2>{props.data.homePageInfo.nodes[0].description}</h2>
      </div>
    </div>
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
