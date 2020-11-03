import React from "react";
// import { graphql } from "gatsby";
import styled from "styled-components";
import Nav from "../../components/Nav";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/ContentWrapper";
// import { Gallery } from "../../components/Gallery";

const GalleryWrapper = styled.div`
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 50px;
  }
`;

export default function gallery(props) {
  return (
    <div>
      <Nav paths={KanieruNav} />
      <Header headerText="Galerija" />
      <GalleryWrapper>
        <ContentWrapper>
          <div className="wrap-container">
            <h1>Galerija!</h1>
          </div>
        </ContentWrapper>
      </GalleryWrapper>
    </div>
  );
}

// export const query = graphql`
//   query MyQuery {
//     allSanityMieraGallery {
//       nodes {
//         id
//         GalleryName
//         GalleryDescription
//         GalleryDate
//         GalleryImages {
//           asset {
//             fluid(maxWidth: 10) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;