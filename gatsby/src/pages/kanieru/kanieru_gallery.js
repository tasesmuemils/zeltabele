import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import { graphql } from "gatsby";
import { Gallery } from "../../components/Gallery";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";

const GalleryWrapper = styled.div`
  .gallery-grid {
    display: grid;
  }
`;

export default function gallery(props) {
  const { nodes } = props.data.allSanityKanieruGallery;
  return (
    <div>
      <Nav paths={KanieruNav} />
      <Header headerText="Galerija" helperText={`Miera ielas filiāle`} />
      <GalleryWrapper>
        <div className="wrap-container Main-content">
          <div className="gallery-grid">
            <Gallery galleryData={nodes} />
          </div>
        </div>
      </GalleryWrapper>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityKanieruGallery {
      nodes {
        id
        GalleryName
        GalleryDescription
        GalleryDate
        GalleryImages {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
