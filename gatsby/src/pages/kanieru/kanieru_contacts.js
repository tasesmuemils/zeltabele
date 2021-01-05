import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";

const KanieruContactStyle = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(2, 1fr);

  section {
    padding: 10px 0;
  }

  p,
  h2 {
    margin: 0;
  }

  .mapouter {
    position: relative;
    text-align: right;
    height: 299px;
    width: 692px;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 299px;
    width: 692px;
    border: solid 5px var(--fourth);
    border-radius: 20px;
  }
`;

export default function contacts({ data }) {
  const { nodes } = data.allSanityKanieruContacts;

  return (
    <div>
      <Nav paths={KanieruNav} />
      <Header headerText="Saznies ar Mums"></Header>
      <div>
        <div className="wrap-container">
          <KanieruContactStyle>
            <div>
              <section>
                <h2>Adrese</h2>
                <p>{nodes[0].address}</p>
              </section>
              <section>
                <h2>Darba laiks</h2>
                <p>{nodes[0].work_time}</p>
              </section>
              <section>
                <h2>E-pasts</h2>
                <p>{nodes[0].email}</p>
              </section>
              <section>
                <h2>Tālrunis</h2>
                <p>{nodes[0].phone}</p>
              </section>
            </div>
          </KanieruContactStyle>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityKanieruContacts {
      nodes {
        address
        phone
        email
        work_time
      }
    }
  }
`;
