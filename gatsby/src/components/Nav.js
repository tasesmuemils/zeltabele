import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const NavStyles = styled.nav`
  padding: 0px 200px;

  .logo {
    width: 50px;
    height: auto;
  }

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
    display: flex;
    font-size: 20px;
    align-items: center;
    color: var(--color-1);
  }

  .navigation {
    display: flex;

    li {
      padding: 0px 20px;
      margin: 0;

      a {
        position: relative;
        padding: 5px;
      }

      /* Border X get width  */
      a:before,
      a:after {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 2px;
        content: "";
        background: var(--color-1);
        transition: all 0.2s;
      }

      a:before {
        left: 0px;
        top: 0px;
      }

      a:after {
        right: 0px;
        bottom: 0px;
      }

      a:hover:before,
      a:hover:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;

export default function Nav({ paths }) {
  return (
    <NavStyles>
      <div className="wrap-container">
        <ul>
          <li>
            <Link to="/">
              <Logo className="logo" />
            </Link>
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
