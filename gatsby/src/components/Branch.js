// Main packages
import React from "react";
import { Link } from "gatsby";
// Other components
import Logo from "../assets/logo.svg";
import { device } from "./mediaQueries";
// Styling and background
import styled from "styled-components";

const BranchStyle = styled.div`
  background-color: none;
  display: flex;
  justify-content: center;
  text-align: center;

  .branch-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    .branch-button {
      border-radius: 10px;
      margin: 0px 60px;

      button {
        position: relative;
        background-color: transparent;
        /* border-radius: 50px; */
        color: var(--white);
        border: 2px solid var(--white);
        padding: 10px 25px;
        font-size: 28px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: #ffffff;
          border: 2px solid var(--white);
          color: var(--color-1);
        }
      }
    }

    .logo-wrapper {
      display: flex;
      justify-content: center;

      .logo {
        max-width: 100%;
        height: auto;
      }

      .logo rect {
        fill: none;
      }

      .logo path {
        fill: var(--white);
      }
    }
  }

  // Responsive styling
  @media ${device.laptop} {
    .branch-buttons {
      .branch-button {
        margin: 0px 40px;
        button {
          padding: 10px 15px;
          font-size: 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .branch-buttons {
      grid-template-columns: repeat(2, 1fr);
      .branch-button {
        margin: 0px;
        padding: 20px;

        button {
          /* border-radius: 50px; */

          padding: 5px 15px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s;
        }
      }

      .logo-wrapper {
        display: none;
      }
    }
  }

  @media ${device.mobileL} {
    .branch-buttons {
      grid-template-columns: repeat(2, 1fr);
      .branch-button {
        padding: 10px 5px;

        button {
          padding: 5px 15px;
          font-size: 20px;
        }
      }
    }
  }

  @media ${device.mobileS} {
    .branch-buttons {
      .branch-button {
        padding: 10px 5px;

        button {
          font-size: 15px;
        }
      }
    }
  }
`;

export function Branch() {
  return (
    <BranchStyle>
      <div className="wrap-container">
        <div className="branch-buttons">
          <div className="branch-buttons-order">
            <div className="branch-button">
              <Link to="/kanieru/kanieru_about">
                <button>
                  <span>Kaņiera iela</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="logo-wrapper branch-buttons-order">
            <Logo className="logo" />
          </div>
          <div className="branch-buttons-order">
            <div className="branch-button">
              <Link to="/miera/miera_about">
                <button>
                  <span>Miera iela</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BranchStyle>
  );
}
