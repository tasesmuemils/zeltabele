import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const BranchStyle = styled.div`
  background-color: none;
  display: flex;
  justify-content: center;
  text-align: center;
  /* padding: 0px 50px 0px; */
  /* * {
    border: 1px solid red;
  } */

  h2 {
    font-size: 50px;
    padding: 20px;
    margin: 0;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
  }

  .logo {
    max-width: 200px;
    height: auto;
  }

  .logo rect {
    fill: var(--color-3);
  }

  .logo path {
    fill: var(--white);
  }

  .branch-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    .branch-button {
      border-radius: 10px;
      margin: 0px 80px;
      box-shadow: 1px 4px 7px 2px p;

      button {
        position: relative;
        overflow: hidden;
        background-color: var(--color-4);
        border-radius: 50px;
        color: var(--white);
        border: 2px solid var(--white);
        padding: 10px 25px;
        font-size: 28px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: var(--color-6);
          border: 2px solid var(--color-6);
          border-radius: 20px;
          color: var(--white);
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
          <div>
            <div className="branch-button">
              <Link to="/kanieru/kanieru_about">
                <button>
                  <span>Kaņiera iela</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="logo-wrapper">
            <Logo className="logo" />
          </div>
          <div>
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
