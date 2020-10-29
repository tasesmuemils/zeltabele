import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const BranchStyle = styled.div`
  background-color: none;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 50px 50px 30px;

  .branch {
    display: grid;
    justify-content: center;
  }

  h2 {
    font-size: 50px;
    padding: 20px;
    margin: 0;
  }

  .branch-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  button {
    background: none;
    overflow: hidden;
    color: var(--white);
    border: 2px solid var(--white);
    padding: 10px 20px;
    font-size: 28px;
    margin: 0 100px;
    cursor: pointer;
  }
`;

export function Branch() {
  return (
    <BranchStyle>
      <div className="wrap-container">
        <div className="branch-buttons">
          <div>
            <Link to="/">
              <button>Kaņieru iela</button>
            </Link>
          </div>
          <div>
            <Link to="/miera/miera_about">
              <button>Miera iela</button>
            </Link>
          </div>
        </div>
      </div>
    </BranchStyle>
  );
}
