// Main packages
import React from "react";
import { Link } from "gatsby";
// Other components
import Logo from "../assets/logo.svg";
import { device } from "../components/mediaQueries";
// Styling and background
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";

const NavStyles = styled.nav`
  /* MAIN STYLE */

  padding: 0px 50px;

  .nav-items-wrapper {
    display: grid;
    justify-items: right;
    grid-template-columns: auto 1fr;
    padding: 10px 30px;
    margin: 0;
    list-style: none;
    text-align: center;

    .logo {
      width: 50px;
      height: auto;
    }

    .navigation {
      display: flex;

      .navigation-phone {
        display: none;
      }

      .navigation-desktop {
        display: flex;
        padding: 0;
        margin: 0;

        li {
          padding: 0px 15px;
          margin: 0;
          display: flex;
          font-size: 20px;
          align-items: center;
          color: var(--color-headings);

          a {
            color: var(--color-headings);
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
            background: var(--color-headings);
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
    }
  }

  @media ${device.laptop} {
    padding: 0px 30px;

    .nav-items-wrapper {
      .navigation {
        justify-content: flex-end;
        .navigation-desktop {
          li {
            padding: 0px 5px;
            font-size: 17px;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    /* MAIN STYLE */

    padding: 0px 20px;

    .nav-items-wrapper {
      display: grid;
      justify-items: right;
      grid-template-columns: auto 1fr;
      padding: 10px 30px;
      margin: 0;
      list-style: none;
      text-align: center;

      .logo {
        width: 40px;
      }

      .navigation {
        .navigation-phone {
          display: flex;
          align-items: center;

          a {
            color: var(--white);
          }
          /* Position and sizing of burger button */
          .bm-burger-button {
            display: grid;
            position: relative;
            width: 30px;
            height: 30px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: var(--color-1);
            transition: 0.2s all ease;
          }

          /* Color/shape of burger icon bars on hover*/
          .bm-burger-bars-hover {
            background-color: var(--color-1);
          }

          /* Position and sizing of clickable cross button */
          .bm-cross-button {
            height: 24px;
            width: 24px;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: var(--white);
          }

          /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/

          .bm-menu-wrap {
            position: fixed;
            height: 100%;
            width: 100% !important;
            top: 0 !important;
          }

          /* General sidebar styles */
          .bm-menu {
            padding: 0;
            background-color: var(--color-1);
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
          }

          /* Wrapper for item list */
          .bm-item-list {
            color: #ffffff;
            padding: 0.8em 1em;
          }

          /* Individual item */
          .bm-item {
            color: #ffffff;
            border: 2px solid white;
            margin: 15px 0;
            display: inline-block;
            outline: none;
            padding: 10px 0;
            font-size: 20px;
          }
        }

        .navigation-desktop {
          display: none;
        }
      }
    }
  }

  @media ${device.mobileL} {
    /* MAIN STYLE */
    padding: 0px;
  }
`;

export default function Nav({ paths }) {
  return (
    <NavStyles>
      <div className="wrap-container">
        <div className="nav-items-wrapper">
          <div>
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="navigation">
            <div className="navigation-phone">
              <Menu right noOverlay>
                {paths.map((path, index) => {
                  return (
                    <Link key={index} to={path.path}>
                      <li>{path.text}</li>
                    </Link>
                  );
                })}
              </Menu>
            </div>

            <ul className="navigation-desktop">
              {paths.map((path, index) => {
                return (
                  <li key={index}>
                    <Link to={path.path}>{path.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </NavStyles>
  );
}
