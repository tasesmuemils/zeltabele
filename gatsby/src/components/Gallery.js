// Main packages
import React, { useState } from "react";
import Img from "gatsby-image/withIEPolyfill";
// Other components
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";
import { Modal, Carousel } from "react-bootstrap";

const GalleryStyle = styled.div`
  .gallery-content-wrapper {
    display: grid;
    grid-template-columns: minmax(auto, 300px) auto;
    grid-template-rows: min-content;
    align-items: center;
    margin: 50px 0px;
    padding: 20px 150px;

    .thumb-wrapper {
      position: relative;
      display: grid;
      cursor: pointer;
      max-height: 300px;
      outline: none;
      overflow: hidden;

      &:hover {
        .thumb-hover {
          opacity: 1;
        }

        .thumb-style {
          transform: scale(1.5);
        }
      }

      .thumb-style {
        transition: all 0.5s;
      }

      .thumb-hover {
        position: absolute;
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: rgba(20, 15, 7, 0.6);
        opacity: 0;
        transition: all 0.5s;
        color: white;

        h3 {
          color: var(--white);
        }
      }
    }

    .card-text {
      padding: 30px;
      color: var(--color-text);

      h2 {
        margin: 0px;
        color: var(--color-headings);
        font-size: 40px;
      }

      .gallery-date {
        font-size: 18px;
        color: var(--color-headings);
      }

      .gallery-text {
        padding: 20px 0 20px 0;
      }

      p {
        margin: 0;
      }

      button {
        letter-spacing: 1px;
        font-size: 16px;
        transition: 0.3s ease-in-out;
        background-color: var(--color-6);
        border: none;
        color: var(--white);
        padding: 10px 20px;

        &:hover {
          background-color: #2f752a;
        }
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .gallery-content-wrapper {
      padding: 20px 20px;
    }
  }

  @media ${device.laptop} {
    .gallery-content-wrapper {
      grid-template-columns: minmax(auto, 250px) auto;
      margin: 30px 0px;
      padding: 0;

      .card-text {
        padding: 20px 0 20px 20px;
      }
    }
  }

  @media ${device.tablet} {
    .gallery-content-wrapper {
      grid-template-columns: 1fr;
      margin: 30px 0px;
      padding: 0;

      .card-text {
        padding: 10px 0 20px 0px;

        .gallery-text {
          padding: 10px 0;
        }
      }
    }
  }
`;

const StyledModal = styled(Modal)`
  .custom-modal-dialog {
    max-width: 700px;
  }

  .carousel-image-height {
    /* max-height: 600px; */
  }
`;

const StyledImg = styled(Img)`
  max-height: 90vh;
`;

export function Gallery({ galleryData }) {
  const galleysCards = galleryData.map(gallery => {
    //BOOTSTRAP MODAL
    const [show, setShow] = useState(false);

    const handeleClose = () => setShow(false);
    const handeleShow = () => setShow(true);

    const imagesInModal = gallery.GalleryImages.map((image, index) => {
      return (
        <Carousel.Item key={index}>
          <StyledImg className="image-style" fluid={image.asset.fluid} />
        </Carousel.Item>
      );
    });

    return (
      <GalleryStyle key={gallery.id}>
        <div className="gallery-content-wrapper">
          {" "}
          <StyledModal
            show={show}
            onHide={handeleClose}
            centered
            contentClassName="custom-modal-content"
            dialogClassName="custom-modal-dialog"
          >
            <Carousel fade={true}>{imagesInModal}</Carousel>
          </StyledModal>
          <div className="thumb-wrapper" onClick={handeleShow}>
            <Img
              className="thumb-style"
              fluid={gallery.GalleryImages[0].asset.fluid}
            />
            <div className="thumb-hover">
              <div>
                <h3>Apskatīt galeriju</h3>
                <h3>{`+${gallery.GalleryImages.length}`}</h3>
              </div>
            </div>
          </div>
          <div className="card-text">
            <h2>{gallery.GalleryName}</h2>
            <p className="gallery-date">
              {gallery.GalleryDate
                ? gallery.GalleryDate.split("-").reverse().join(".")
                : gallery.GalleryDate}
            </p>
            <p className="gallery-text">{gallery.GalleryDescription}</p>
            <button onClick={handeleShow}>Apskatīt</button>
          </div>
        </div>
      </GalleryStyle>
    );
  });

  return <div>{galleysCards}</div>;
}
