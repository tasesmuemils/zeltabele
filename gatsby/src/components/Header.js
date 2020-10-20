import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(113, 121, 9, 1) 35%,
    rgba(255, 239, 0, 1) 100%
  );
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  height: 100%;
  padding: 10em 0;
  color: var(--white);

  h1 {
    font-size: 70px;
  }
`;

export default function Header(props) {
  return (
    <HeaderStyle bgImg={props.bgImg}>
      <h1>{props.headerText}</h1>
    </HeaderStyle>
  );
}
