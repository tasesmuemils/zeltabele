// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import Nav from "../../components/Nav";
import { Gallery } from "../../components/Gallery";
import { KanieruNav } from "../../components/Paths";
import Header from "../../components/Header";
// Styling and backgrounds
import styled from "styled-components";

const GalleryWrapper = styled.div`
  .gallery-grid {
    display: grid;
  }
`;

export default function gallery(props) {
  const { nodes } = props.data.allSanityKanieruGallery;
  return (
    <div>
      <SEO title="Galerija (Kaņiera iela)" />
      <Nav paths={KanieruNav} />
      <Header headerText="Galerija" helperText={`Kaņiera ielas filiāle`} />
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
    allSanityKanieruGallery(sort: { fields: GalleryDate, order: DESC }) {
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
