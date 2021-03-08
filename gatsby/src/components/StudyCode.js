// Main packages
import React from "react";
// Other components
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const StudyCodeStyle = styled.div`
  text-align: center;

  // Responsive style
  @media ${device.tablet} {
    padding: 30px 20px;
  }

  @media ${device.mobileL} {
    padding: 30px 10px 30px 10px;
  }
`;

export default function StudyCode() {
  return (
    <StudyCodeStyle>
      <h3>
        Realizējam licencētu Vispārējās pirmsskolas izglītības programmu
        (programmas kods: 01011111)
      </h3>
    </StudyCodeStyle>
  );
}
