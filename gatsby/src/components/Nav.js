import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin: 0;
  padding: 20px 0;
  ul {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    list-style: none;
    text-align: center;
  }

  li {
    font-size: 20px;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Par Mums</Link>
        </li>
        <li>
          <Link to="/studyplans">Mācību plāns</Link>
        </li>
        <li>
          <Link to="/">ZELTĀBELE</Link>
        </li>
        <li>
          <Link to="/gallery">Galerija</Link>
        </li>
        <li>
          <Link to="/contacts">Sazniens ar Mums</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
