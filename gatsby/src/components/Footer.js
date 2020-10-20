import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  text-align: center;
  background-color: var(--pink);
  padding: 50px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p>ADRESE</p>
      <p>KONTAKTI</p>
      <p>Vēl visāds info</p>
      <p>&copy; Zeltabele {new Date().getFullYear()}</p>
    </FooterStyle>
  );
}
