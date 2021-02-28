// Main packages
import React from "react";
import ScrollUpButton from "react-scroll-up-button";
// Other components
import ArrowSvg from "../assets/up-arrow.svg";
// Styling and background
import styled from "styled-components";
import { device } from "../components/mediaQueries";

const ScrollUpStyle = styled.div`
  .iconContainer {
    position: fixed;
    right: -100px;
    bottom: 15px;
    border-radius: 50%;
    transition: right 0.5s;
    cursor: pointer;
    outline: none;
    background-color: rgba(255, 255, 255, 0.6);
    color: var(--white);
    /* padding: 10px; */
    z-index: 10;

    div {
      padding: 10px 14px;
      .arrow {
        width: 15px;
        color: white;
      }
    }
  }

  .iconTransition {
    right: 15px;
  }

  @media ${device.tablet} {
    .iconContainer {
      bottom: 10px;
      div {
        padding: 5px 12px;
        .arrow {
          width: 10px;
        }
      }
    }

    .iconTransition {
      right: 10px;
    }
  }
`;

export default function scrollUp(props) {
  return (
    <ScrollUpStyle>
      <ScrollUpButton
        ContainerClassName="iconContainer"
        TransitionClassName="iconTransition"
        StopPosition={5}
      >
        <div>
          <ArrowSvg className="arrow" />
        </div>
      </ScrollUpButton>
    </ScrollUpStyle>
  );
}
