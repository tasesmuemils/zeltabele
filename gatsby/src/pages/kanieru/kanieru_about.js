import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";

const KanieruAboutStyle = styled.div`
  .about-main,
  .about-mission {
    padding: 0px 30px;
  }

  .about-mission {
    display: grid;
    justify-content: center;
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

export default function kanieru_about() {
  return (
    <div>
      <Nav paths={KanieruNav} />
      <Header headerText={"Par Mums"} helperText={`Kaņiera ielas filiāle`} />
      <KanieruAboutStyle>
        <div className="wrap-container Main-content">
          <h1>HELLO!</h1>
        </div>
      </KanieruAboutStyle>
    </div>
  );
}
