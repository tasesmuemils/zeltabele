import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Gallery } from "../../components/Gallery";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";
import { ContentWrapper } from "../../components/ContentWrapper";

const GalleryWrapper = styled.div`
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 50px;
  }
`;

export default function gallery(props) {
  const { nodes } = props.data.allSanityMieraGallery;
  console.log(nodes[0].GalleryImages[0].asset.fluid);
  return (
    <div>
      <Nav paths={MieraNav} />
      <Header headerText="Galerija" />
      <GalleryWrapper>
        <ContentWrapper>
          <div className="wrap-container">
            <div className="gallery-grid">
              <Gallery galleryData={nodes} />
            </div>
          </div>
        </ContentWrapper>
      </GalleryWrapper>
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    allSanityMieraGallery {
      nodes {
        id
        GalleryName
        GalleryDescription
        GalleryDate
        GalleryImages {
          asset {
            fluid(maxWidth: 10) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
