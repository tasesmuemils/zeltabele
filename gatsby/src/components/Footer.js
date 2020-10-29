import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  text-align: center;
  color: var(--white);
  background-color: var(--fourth);
  p {
    margin: 0px;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="wrap-container">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L120,138.7C240,117,480,75,720,64C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg> */}
        <div>
          <p>ADRESE</p>
          <p>KONTAKTI</p>
          <p>Vēl visāds info</p>
          <p>&copy; Zeltabele {new Date().getFullYear()}</p>
        </div>
      </div>
    </FooterStyle>
  );
}
