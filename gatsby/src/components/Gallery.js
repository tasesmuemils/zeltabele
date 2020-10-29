import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Carousel, Modal } from "react-bootstrap";

const GalleryStyle = styled.div`
  /* margin: 10px; */
  border: none;
  border-radius: 20px;
  padding: 20px;
  background-color: var(--white);
  opacity: 1;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25), 0px 6px 10px rgba(0, 0, 0, 0.22);

  .image-wrapper {
    cursor: pointer;
  }
  .image-style {
    border-radius: 20px;
    /* box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
  }

  h2 {
    margin: 0px;
    padding: 10px 0 0;
  }

  .gallery-date {
    font-size: 18px;
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
`;

// Modal.setAppElement("#___gatsby");

export function Gallery({ galleryData }) {
  const galleysCards = galleryData.map(gallery => {
    //BOOTSTRAP MODAL
    const [show, setShow] = useState(false);

    const handeleClose = () => setShow(false);
    const handeleShow = () => setShow(true);

    const imagesInModal = gallery.GalleryImages.map(image => {
      return (
        <Carousel.Item>
          <Img fluid={image.asset.fluid} />
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
          <Carousel>{imagesInModal}</Carousel>
        </StyledModal>
        <div className="image-wrapper" onClick={handeleShow}>
          <Img
            className="image-style"
            fluid={gallery.GalleryImages[0].asset.fluid}
          />
        </div>
        <h2>{gallery.GalleryName}</h2>
        <p className="gallery-date">{gallery.GalleryDate}</p>
        <p className="gallery-text">{gallery.GalleryDescription}</p>
      </GalleryStyle>
    );
  });

  return <div>{galleysCards}</div>;
}
