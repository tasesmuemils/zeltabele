import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/ContentWrapper";

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

export default function contacts(props) {
  return (
    <div>
      <Nav paths={KanieruNav} />
      <Header headerText="Saznies ar Mums"></Header>
      <div>
        <ContentWrapper>
          <div className="wrap-container">
            <KanieruContactStyle>
              <div>
                <section>
                  <h2>Adrese</h2>
                  <p>test</p>
                </section>
                <section>
                  <h2>Telefons</h2>
                  <p>test</p>
                </section>
                <section>
                  <h2>Darba laiks</h2>
                  <p>test</p>
                </section>
              </div>
              <div>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      width="692"
                      height="299"
                      id="gmap_canvas"
                      src={`https://maps.google.com/maps?q=Miera%20iela%2056&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    ></iframe>
                    <a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/"></a>
                  </div>
                </div>
              </div>
            </KanieruContactStyle>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}

// export const query = graphql`
//   query  {
//     allSanityMieraContacts {
//       nodes {
//         address
//         phone
//         work_time
//       }
//     }
//   }
// `;