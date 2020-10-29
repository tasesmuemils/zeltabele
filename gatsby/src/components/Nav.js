import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  padding: 10px;
  background: var(--fourth);

  ul {
    display: grid;
    justify-items: right;
    grid-template-columns: auto 1fr;
    padding: 10px 30px;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  li {
    color: var(--white);
    font-size: 20px;
  }

  .navigation {
    display: flex;
  }
  .navigation li {
    padding: 0px 20px;
    margin: 0;
  }
`;

export default function Nav({ paths }) {
  return (
    <NavStyles>
      <div className="wrap-container">
        <ul>
          <li>
            <Link to="/">ZELTĀBELE</Link>
          </li>
          <div className="navigation">
            {paths.map((path, index) => {
              return (
                <li key={index}>
                  <Link to={path.path}>{path.text}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </NavStyles>
  );
}
