// Main packages
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
// Styling and background
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import FbLogo from "../assets/facebook.svg";
import { device } from "../components/mediaQueries";

// Footer styling
const FooterStyle = styled.footer`
  background-color: var(--color-5);

  // Branches style
  .footer-branches {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    .footer-branch {
      background-color: #ffffff;
      padding: 70px 30px;

      h2 {
        padding: 10px 0;
        color: var(--color-headings);
        border-top: 3px solid var(--color-5);
        transform: translateY(20px);
        transition: 0.5s ease;
        font-size: 30px;
      }

      button {
        letter-spacing: 1px;
        font-size: 16px;
        opacity: 0;
        transition: 0.5s ease;
        transform: translateY(30px);
        background-color: var(--color-6);
        border: none;
        color: var(--white);
        padding: 10px 20px;
      }

      &:hover {
        background-color: #f8f8f8;
        h2 {
          transform: translateY(0px);
        }
        button {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }

  // Main footer style
  .footer-basics {
    text-align: center;
    color: var(--white);
    background-color: var(--color-4);
    background-image: linear-gradient(
      0deg,
      var(--color-4) 0%,
      var(--color-5) 100%
    );
    padding: 20px;

    p {
      font-size: 14px;
      color: var(--color-text-bg);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      align-items: center;
      padding: 10px;

      * {
        margin: 0px;
      }

      h3 {
        font-size: 17px;
      }

      .footer-to-page {
        background: none;
        overflow: hidden;
        color: var(--white);
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 21px;
        cursor: pointer;
        outline: none;
        &:hover {
        }
      }

      // Logo style
      .logo-wrapper {
        .logo {
          width: 70px;
          height: auto;

          rect {
            fill: none;
          }

          path {
            fill: var(--white);
          }
        }

        .fb-logo-wrapper {
          display: flex;
          justify-content: center;
          padding-top: 25px;
          padding-bottom: 5px;
          background-color: none;

          .fb-logo {
            width: 25px;
            height: auto;
            background-color: none;
          }
        }
      }
    }
  }

  // Responsive styling
  @media ${device.tablet} {
    // Branches style
    .footer-branches {
      grid-template-columns: repeat(1, 1fr);

      .footer-branch {
        padding: 30px;

        h2 {
          padding: 10px 0 5px 0;
          transform: translateY(0px);
          transition: none;
          font-size: 25px;
        }

        button {
          opacity: 1;
          transition: none;
          transform: translateY(0px);
          transition: 0.3s ease-in-out;
        }

        &:hover {
          h2 {
            transform: none;
          }
          button {
            opacity: 1;
            transform: none;
            background-color: #2f752a;
          }
        }
      }
    }

    // Main footer style
    .footer-basics {
      .footer-content {
        display: flex;
        flex-direction: column;

        .kanieru-footer,
        .miera-footer {
          padding: 20px 0px;
        }

        // Logo style
        .logo-wrapper {
          order: 3;
        }
      }
    }
  }
`;

export default function Footer() {
  // Using static query inside function
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allSanityKanieruContacts {
        nodes {
          address
          work_time
          email
          phone
        }
      }
      allSanityMieraContacts {
        nodes {
          address
          work_time
          email
          phone
        }
      }
    }
  `);

  const kanieruInfo = data.allSanityKanieruContacts.nodes;
  const mieraInfo = data.allSanityMieraContacts.nodes;

  console.log(kanieruInfo, mieraInfo);

  return (
    <FooterStyle>
      <div className="footer-branches">
        <Link to="/kanieru/kanieru_about">
          <div className="footer-branch">
            <h2>Kaņiera ielas filiāle</h2>
            <button>Apskatīt</button>
          </div>
        </Link>
        <Link to="/miera/miera_about">
          <div className="footer-branch">
            <h2>Miera ielas filiāle</h2>
            <button>Apskatīt</button>
          </div>
        </Link>
      </div>
      <div className="wrap-container footer-basics">
        <div>
          <div className="footer-content-wrapper">
            <div className="footer-content">
              <div className="kanieru-footer">
                <h3>
                  <Link to="/kanieru/kanieru_about">
                    <span className="footer-to-page">Kaņiera iela</span>
                  </Link>
                </h3>
                <div>
                  <p>Adrese: {kanieruInfo[0].address}</p>
                  <p>Darba laiks: {kanieruInfo[0].work_time}</p>
                  <p>E-pasts: {kanieruInfo[0].email}</p>
                  <p>Tālrunis: {kanieruInfo[0].phone}</p>
                </div>
              </div>
              <div className="logo-wrapper">
                <Logo className="logo" />
                <div className="fb-logo-wrapper">
                  <a href="https://www.facebook.com/Priv%C4%81t%C4%81-pirmsskolas-izgl%C4%ABt%C4%ABbas-iest%C4%81de-Zelt%C4%81bele-1455396878058055/">
                    <FbLogo className="fb-logo" />
                  </a>
                </div>
                <p>&copy; Zeltābele {new Date().getFullYear()}</p>
              </div>
              <div className="miera-footer">
                <h3>
                  <Link to="/miera/miera_about">
                    <span className="footer-to-page">Miera iela</span>
                  </Link>
                </h3>
                <div>
                  <p>Adrese: {mieraInfo[0].address}</p>
                  <p>Darba laiks: {mieraInfo[0].work_time}</p>
                  <p>E-pasts: {mieraInfo[0].email}</p>
                  <p>Tālrunis: {mieraInfo[0].phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
