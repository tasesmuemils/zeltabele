import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";

export default function contacts() {
  return (
    <div>
      <Nav paths={MieraNav} />
      <Header headerText="Saznies ar Mums"></Header>
      <div>
        <ContentWrapper>
          <div className="wrap-container">
            <h1>HELLO</h1>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}
