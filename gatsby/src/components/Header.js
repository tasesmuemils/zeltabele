// Main packages
import React from "react";
// Other components
import { Branch } from "./Branch";
import { device } from "./mediaQueries";
import Logo from "../assets/logo.svg";
// Styling and background
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: grid;
  align-items: center;
  position: relative;
  background-color: var(--color-4);
  background-image: linear-gradient(
    180deg,
    var(--color-4) 0%,
    var(--color-5) 100%
  );

  text-align: center;
  overflow: hidden;
  padding: 4em 0;
  color: var(--color-text-bg);

  // For Main page HERO section
  flex-grow: 4;

  // Header wrapper style
  .header-wrapper {
    .logo-wrapper-small {
      display: none;

      .logo rect {
        fill: none;
      }

      .logo path {
        fill: var(--white);
      }
    }

    .header-text {
      color: var(--white);
      h1 {
        font-weight: 600;
        font-size: 60px;
        padding-top: 25px;
        letter-spacing: 1px;
      }

      h2 {
        padding-bottom: 30px;
        color: var(--white);
        font-weight: 600;
        font-size: 30px;
        letter-spacing: 1px;
      }
    }
  }

  // Responsive styling
  @media ${device.tablet} {
    .header-wrapper {
      display: flex;
      flex-direction: column;

      .logo-wrapper {
        order: 4;
      }

      .logo-wrapper-small {
        display: grid;
        justify-content: center;

        .logo {
          max-width: 150px;
          height: auto;
        }
      }

      .header-text {
        h1 {
          font-size: 30px;
          padding: 20px 5px 0px 5px;
        }

        h2 {
          padding-bottom: 20px;
          font-size: 20px;
        }
      }
    }
  }

  @media ${device.mobileL} {
    .header-wrapper {
      .header-text {
        h1 {
          /* font-size: 25px; */
          padding: 15px 0px 5px 0px;
        }

        h2 {
          font-size: 17px;
        }
      }
    }
  }
`;

export default function Header({ children, headerText, helperText }) {
  return (
    <HeaderStyle>
      <div className="wrap-container header-wrapper">
        <div className="logo-wrapper">
          {headerText === `Privātais bērnudārzs "Zeltābele"` ? (
            <Branch />
          ) : null}
        </div>
        <div className="logo-wrapper-small">
          {headerText === `Privātais bērnudārzs "Zeltābele"` ? (
            <Logo className="logo" />
          ) : null}
        </div>
        <div className="header-text">
          <h1>{headerText}</h1>
          <h2>{helperText}</h2>
        </div>

        {headerText === `Privātais bērnudārzs "Zeltābele"` ? children : null}
      </div>
    </HeaderStyle>
  );
}
