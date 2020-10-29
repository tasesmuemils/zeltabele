import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: grid;
  align-items: center;
  position: relative;
  background: var(--fourth);
  text-align: center;
  overflow: hidden;
  /* height: calc(100vh - 70px); */
  padding: 5em 0 0em;
  /* margin: 30px; */
  color: var(--white);

  h1 {
    font-family: "Varela Round", "sans-serif";
    font-weight: 800;
    font-size: 60px;
  }

  svg {
    display: block;
  }
`;

export default function Header({ children, headerText, helperText }) {
  return (
    <HeaderStyle>
      <div className="wrap-container">
        <h1>{headerText}</h1>
        <h2>{helperText}</h2>
        {headerText === `Privātais bērnu dārzs "Zeltābele"` ? children : null}
      </div>
    </HeaderStyle>
  );
}
