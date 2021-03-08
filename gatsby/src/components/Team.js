// Main packages
import React from "react";
// Other components
import { device } from "../components/mediaQueries";
import Img from "gatsby-image/withIEPolyfill";
// Styling and background
import styled from "styled-components";

const TeamMembersStyle = styled.div`
  /* * {
    border: 1px solid red;
  } */

  display: grid;
  justify-content: center;
  padding: 20px 0 30px;
  text-align: center;

  .title {
    /* font-size: 40px; */
    color: var(--color-headings);
    padding-bottom: 50px;
  }

  .member-wrapper {
    padding: 0 100px;
  }

  .member-card {
    display: grid;
    text-align: left;
    grid-template-columns: minmax(200px, 300px) 1fr;
    grid-template-rows: min-content;
    padding: 20px 0 20px 0px;

    .member-info {
      padding-left: 50px;
      color: var(--color-text);

      h2 {
        color: var(--color-headings);
      }

      .member-position {
        font-size: 18px;
        color: var(--color-headings);
      }

      li {
        font-size: 16px;
        letter-spacing: 0.03em;
        line-height: 1.6em;

        &::marker {
          color: var(--color-headings);
        }
      }
    }

    .member-image {
      width: 100%;
    }
  }

  // Responsive style
  @media ${device.laptopL} {
    .member-wrapper {
      padding: 0 20px;
    }
  }

  @media ${device.laptop} {
    .member-card {
      grid-template-columns: minmax(100px, 200px) 1fr;
    }
  }

  @media ${device.tablet} {
    padding: 20px 0;
    .title {
      padding-bottom: 20px;
    }
    .member-wrapper {
      padding: 0;
    }

    .member-card {
      grid-template-columns: repeat(1, 1fr);
      padding: 30px 0;

      .member-image {
        padding: 0 100px 20px 100px;
      }
      .member-info {
        padding: 10px;
      }
    }
  }

  @media ${device.mobileL} {
    padding: 20px 0;
    .member-card {
      padding: 20px 0;
      .member-image {
        padding: 0 20px 20px 20px;
      }
    }
  }
`;

export function TeamMembers(props) {
  const TeamMembersList = props.teamMembers.map(member => {
    return (
      <div className="member-card" key={member.TeamMemberName}>
        <div className="member-image">
          <Img fluid={member.TeamMemberImage.asset.fluid} />
        </div>

        <div className="member-info">
          <h2>{member.TeamMemberName}</h2>
          <p className="member-position">{member.TeamMemberPosition}</p>
          <p>{member.TeamMemberDescription}</p>
          <ul>
            {member.TeamMemberEducation.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <TeamMembersStyle>
      <div className="member-wrapper Main-content">{TeamMembersList}</div>
    </TeamMembersStyle>
  );
}
