// Main packages
import React from "react";
// Other components
import Logo from "../assets/logo.svg";
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const FourOhFourStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-headings);
  padding: 100px 0;

  .logo {
    padding-top: 20px;
  }
`;

export default function fourOhFour() {
  return (
    <FourOhFourStyle>
      <h1>404</h1>
      <h1>Lapa nav sasniedzama</h1>
      <div className="logo">
        <Logo />
      </div>
    </FourOhFourStyle>
  );
}
