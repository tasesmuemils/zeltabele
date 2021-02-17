import React, { useState } from "react";
import Img from "gatsby-image/withIEPolyfill";
import styled from "styled-components";
import { Modal, Carousel } from "react-bootstrap";

const GalleryStyle = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: min-content;
  border-radius: 20px;
  margin: 50px 0px;
  /* background-color: var(--color-4); */
  /* color: var(--white); */

  &:nth-child(2n) {
    /* background-color: var(--color-5); */
  }

  .thumb-wrapper {
    position: relative;
    display: grid;
    cursor: pointer;
    border-radius: 20px;
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
  }

  .thumb-style {
    border-radius: 20px;
    height: 0;
    min-height: 100%;
    transition: all 0.5s;
  }

  .card-text {
    padding: 30px;
    margin: 30px 50px;
    border: 10px solid var(--color-5);
    border-radius: 50px;
    color: var(--color-text);
  }

  h2 {
    margin: 0px;
    padding: 10px 0 0;
    color: var(--color-headings);
  }

  .gallery-date {
    font-size: 18px;
    color: var(--color-headings);
  }

  .gallery-text {
    padding: 10px 0;
  }

  p {
    margin: 0;
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
        </div>
      </GalleryStyle>
    );
  });

  return <div>{galleysCards}</div>;
}
