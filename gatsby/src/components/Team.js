import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import styled from "styled-components";

const TeamMembersStyle = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 50px;

  h2 {
    text-align: center;
    color: var(--color-headings);
  }

  .member-card {
    display: grid;
    grid-template-columns: 300px 1fr;
    padding: 20px;

    h3,
    h4 {
      color: var(--color-headings);
    }

    .member-image {
      /* max-width: 300px; */
    }

    .member-info {
      padding: 20px;
      color: var(--color-text);
    }
  }
`;

export function TeamMembers(props) {
  const TeamMembersList = props.teamMembers.map(member => {
    return (
      <div className="member-card" key={member.TeamMemberName}>
        <Img
          className="member-image"
          fluid={member.TeamMemberImage.asset.fluid}
        />
        <div className="member-info">
          <h3>{member.TeamMemberName}</h3>
          <h3>{member.TeamMemberPosition}</h3>
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
      <h2>Komanda</h2>
      <div>{TeamMembersList}</div>
    </TeamMembersStyle>
  );
}
