import React, { Children } from "react";
import styled from "styled-components";
import { SVGWrapperBottom } from "./SVGWrapperBottom";
import { SVGWrapperTop } from "./SVGWrapperTop";

const ContentWrapperStyle = styled.div`
  background-color: var(--white);
  background-image: var(--shapes);
  background-attachment: fixed;
  background-size: cover;
`;

export function ContentWrapper({ children }) {
  return (
    <ContentWrapperStyle>
      <SVGWrapperTop />
      {children}
      <SVGWrapperBottom />
    </ContentWrapperStyle>
  );
}
