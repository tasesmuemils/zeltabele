import React from "react";
import styled from "styled-components";
import { Branch } from "./Branch";

const HeaderStyle = styled.header`
  display: grid;
  align-items: center;
  position: relative;
  background: var(--color-4);
  text-align: center;
  overflow: hidden;
  padding: 4em 0;
  margin: 20px 50px 40px 50px;
  border-radius: 20px;
  border-bottom-left-radius: 70px;
  color: var(--color-text-bg);

  h1 {
    font-family: "Varela Round", "sans-serif";
    font-weight: 800;
    font-size: 60px;
    padding-top: 25px;
    letter-spacing: 1px;
  }

  h2 {
    padding-bottom: 30px;
    color: var(--color-text-bg);
  }

  .logo-wrapper {
    .logo {
      rect {
        fill: var(--color-4);
      }

      path {
        fill: var(--white);
      }
    }
  }
`;

export default function Header({ children, headerText, helperText }) {
  return (
    <HeaderStyle>
      <div className="wrap-container">
        <div className="logo-wrapper">
          {headerText === `Privātais bērnu dārzs "Zeltābele"` ? (
            <Branch />
          ) : null}
        </div>
        <h1>{headerText}</h1>
        <h2>{helperText}</h2>
        {headerText === `Privātais bērnu dārzs "Zeltābele"` ? children : null}
      </div>
    </HeaderStyle>
  );
}
