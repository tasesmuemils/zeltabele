// Main packages
import React from "react";
import { graphql } from "gatsby";
// Other components
import SEO from "../../components/SEO";
import { Gallery } from "../../components/Gallery";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { MieraNav } from "../../components/Paths";
// Styling and background
import styled from "styled-components";

const GalleryWrapper = styled.div`
  .gallery-grid {
    display: grid;
  }
`;

export default function gallery(props) {
  const { nodes } = props.data.allSanityMieraGallery;
  return (
    <div>
      <SEO title="Galerija (Miera iela)" />
      <Nav paths={MieraNav} />
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
  query MyQuery {
    allSanityMieraGallery(sort: { fields: GalleryDate, order: DESC }) {
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
