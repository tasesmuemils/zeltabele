import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import FbLogo from "../assets/facebook.svg";
import { Link, useStaticQuery, graphql } from "gatsby";

const FooterStyle = styled.footer`
  text-align: center;
  color: var(--white);
  background-color: var(--color-4);
  padding: 20px;
  margin: 50px 50px 0 50px;
  border-top-left-radius: 70px;
  border-top-right-radius: 20px;
  p {
    font-size: 14px;
  }
  * {
    /* border: red solid 1px; */
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
      /* margin: 5px auto; */
    }

    p {
      font-size: 14px;
      color: var(--color-text-bg);
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
  }
  .logo-wrapper {
    .logo {
      width: 70px;
      height: auto;

      rect {
        fill: var(--color-4);
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

      .fb-logo {
        width: 25px;
        height: auto;
      }
    }
  }
`;

export default function Footer() {
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
      <div className="wrap-container">
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
