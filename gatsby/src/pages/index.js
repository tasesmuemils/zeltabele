// Main packages
import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
// Other components
import Nav from "../components/Nav";
import Header from "../components/Header";
import { MainNav } from "../components/Paths";
import { device } from "../components/mediaQueries";
import QuotesSVG from "../assets/quote-left.svg";
// Styling and background
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
// Animations
import Aos from "aos";
import "aos/dist/aos.css";

// Style for Header
const HeroStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

//Style for content
const MainAboutStyle = styled.div`
  .home-page {
    overflow-x: hidden;
    text-align: center;

    .welcome-text {
      padding: 100px 500px;
      h2 {
        font-size: 60px;
        padding-bottom: 20px;
        font-weight: 500;
      }
      p {
        color: var(--color-text);
        font-size: 22px;
      }
    }

    .hp-sections {
      .handwrite-text {
        font-family: "Dancing Script", cursive;
        letter-spacing: 4px;
        font-size: 60px;
        color: var(--color-1);
      }
    }

    .hp-section-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background-color: var(--color-grey-background);
      .hp-section-2-text {
        padding: 200px 40px;
        text-align: left;
        color: var(--color-text);

        p:nth-child(2) {
          font-size: 22px;
          letter-spacing: 1px;
          padding-left: 20px;
        }
      }
    }

    .hp-section-3 {
      display: grid;

      .hp-section-3-text {
        display: flex;
        flex-direction: column;
        padding: 200px;
        align-items: flex-start;

        .quote-wrapper {
          width: 45%;
          transform: translateY(40px);
          z-index: 1;

          .quotes {
            width: 100px;
            height: auto;
          }
        }

        p {
          position: relative;
          width: 45%;
          background-color: var(--color-1);
          padding: 50px;
          color: var(--white);
          font-size: 30px;
        }
      }
    }

    .hp-section-4 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background-color: var(--color-grey-background);
      .hp-section-4-text {
        justify-self: right;
        padding: 200px 40px;
        text-align: left;
        color: var(--color-text);

        p:nth-child(2) {
          font-size: 22px;
          letter-spacing: 1px;
          padding-left: 20px;
        }
      }
    }

    .hp-section-5 {
      display: grid;
      justify-content: center;
      text-align: center;
      padding: 100px;

      .hp-section-5-text {
        padding: 20px 100px;
        p {
          font-size: 30px;
          color: var(--color-text);
        }
      }

      .hp-section-5-image {
        padding: 50px 100px;
      }
    }

    .hp-section-6 {
      display: flex;
      justify-content: right;

      .hp-section-6-text {
        display: flex;
        flex-direction: column;
        padding: 200px;
        align-items: flex-end;

        .quote-wrapper {
          width: 45%;
          transform: translateY(40px);
          z-index: 1;

          .quotes {
            width: 100px;
            height: auto;
          }
        }
        p {
          width: 45%;
          background-color: var(--color-1);
          padding: 50px;
          color: var(--white);
          font-size: 30px;
        }
      }
    }
  }

  // Responsive styling

  @media ${device.laptopL} {
    .home-page {
      .welcome-text {
        padding: 100px 200px;
        h2 {
          font-size: 50px;
        }
      }

      .hp-sections {
        .handwrite-text {
          letter-spacing: 2px;
          font-size: 50px;
        }
      }

      .hp-section-2 {
        .hp-section-2-text {
          padding: 70px 40px;
        }
      }

      .hp-section-3 {
        .hp-section-3-text {
          padding: 100px;

          .quote-wrapper {
            width: 50%;
          }

          p {
            width: 50%;
          }
        }
      }

      .hp-section-4 {
        .hp-section-4-text {
          padding: 100px 40px;
        }
      }

      .hp-section-5 {
        padding: 70px;

        .hp-section-5-text {
          padding: 20px 70px;
          p {
            font-size: 22px;
          }
        }

        .hp-section-5-image {
          padding: 50px 70px;
        }
      }

      .hp-section-6 {
        .hp-section-6-text {
          padding: 100px;

          .quote-wrapper {
            width: 50%;
          }

          p {
            width: 50%;
          }
        }
      }
    }
  }

  @media ${device.laptop} {
    .home-page {
      .welcome-text {
        padding: 100px 70px;
        h2 {
          font-size: 45px;
        }
      }

      .hp-sections {
        .handwrite-text {
          letter-spacing: 2px;
          font-size: 40px;
        }
      }

      .hp-section-2 {
        .hp-section-2-text {
          padding: 40px 30px;
        }
      }

      .hp-section-3 {
        .hp-section-3-text {
          .quote-wrapper {
            width: 100%;
          }

          p {
            width: 100%;
          }
        }
      }

      .hp-section-4 {
        .hp-section-4-text {
          padding: 40px 30px;
        }
      }

      .hp-section-5 {
        padding: 40px;

        .hp-section-5-text {
          padding: 20px 40px;
          p {
            font-size: 22px;
          }
        }

        .hp-section-5-image {
          padding: 40px;
        }
      }

      .hp-section-6 {
        .hp-section-6-text {
          .quote-wrapper {
            width: 100%;
          }

          p {
            width: 100%;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    .home-page {
      .welcome-text {
        padding: 70px 50px;
        h2 {
          font-size: 35px;
          padding-bottom: 15px;
        }
        p {
          font-size: 18px;
        }
      }

      .hp-section-2 {
        .hp-section-2-text {
          p:nth-child(2) {
            font-size: 18px;
            padding-left: 10px;
          }
        }
      }

      .hp-section-3 {
        .hp-section-3-text {
          padding: 50px;

          .quote-wrapper {
            transform: translateY(25px);

            .quotes {
              width: 70px;
            }
          }

          p {
            font-size: 22px;
          }
        }
      }

      .hp-section-4 {
        .hp-section-4-text {
          p:nth-child(2) {
            font-size: 18px;
            padding-left: 10px;
          }
        }
      }

      .hp-section-5 {
        .hp-section-5-text {
          p {
            font-size: 22px;
          }
        }

        .hp-section-5-image {
          padding: 30px;
        }
      }

      .hp-section-6 {
        .hp-section-6-text {
          padding: 50px;

          .quote-wrapper {
            transform: translateY(25px);

            .quotes {
              width: 70px;
            }
          }

          p {
            font-size: 22px;
          }
        }
      }
    }
  }

  @media ${device.mobileL} {
    .home-page {
      .welcome-text {
        text-align: left;
        padding: 50px 20px;
        h2 {
          font-size: 30px;
        }
      }

      .hp-sections {
        .handwrite-text {
          letter-spacing: 1px;
          font-size: 30px;
        }
      }

      .hp-section-2 {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 300px auto;
        .hp-section-2-text {
          padding: 50px 20px;
        }
      }

      .hp-section-3 {
        .hp-section-3-text {
          padding: 20px;

          .quote-wrapper {
            transform: translateY(15px);

            .quotes {
              width: 40px;
            }
          }

          p {
            font-size: 18px;
            padding: 20px;
          }
        }
      }

      .hp-section-4 {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto 300px;
        .hp-section-4-text {
          padding: 50px 20px;
        }
      }

      .hp-section-5 {
        padding: 30px 10px;

        .hp-section-5-text {
          text-align: left;
          padding: 30px 10px;
          p {
            font-size: 18px;
          }
        }

        .hp-section-5-image {
          padding: 0;
        }
      }

      .hp-section-6 {
        .hp-section-6-text {
          padding: 20px;

          .quote-wrapper {
            transform: translateY(15px);

            .quotes {
              width: 40px;
            }
          }

          p {
            font-size: 18px;
            padding: 20px;
          }
        }
      }
    }
  }
`;

// Background styling
const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background: rgba(59, 46, 21, 0.85);
`;

const StyledBackgroundSectionFixed = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;

  @media ${device.tablet} {
    background-attachment: initial;
  }
`;

export default function homePage(props) {
  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      duration: 1000,
      once: true,
      offset: 70,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  // Aos.init({ duration: 1000, once: true, offset: 70 });

  return (
    <>
      <HeroStyle>
        <Nav paths={MainNav} />
        <Header
          headerText={`Privātais bērnudārzs "Zeltābele"`}
          helperText={`Laimīgai, radošai un drošai bērnībai`}
        ></Header>
      </HeroStyle>

      <MainAboutStyle>
        <div className="home-page">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="welcome-text wrap-container"
          >
            <h2>{props.data.homePageInfo.nodes[0].intro}</h2>
            <p>{props.data.homePageInfo.nodes[0].description}</p>
          </div>

          {/* Image left - text right*/}
          <div className="hp-sections hp-section-2">
            <StyledBackgroundSection
              data-aos="slide-right"
              fluid={props.data.homePageInfo.nodes[0].img_d_2.asset.fluid}
            ></StyledBackgroundSection>
            <div data-aos="slide-left" className="hp-section-2-text">
              <p className="handwrite-text">
                {`${props.data.homePageInfo.nodes[0].description_2
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}...`}
              </p>
              <p>
                {props.data.homePageInfo.nodes[0].description_2
                  .split(" ")
                  .slice(0, -1)
                  .slice(3)
                  .join(" ")}
              </p>
              <p className="handwrite-text">
                {`...${props.data.homePageInfo.nodes[0].description_2
                  .split(" ")
                  .slice(-1)
                  .join("")}`}
              </p>
            </div>
          </div>
          {/* Image background, text centered */}
          <div className="hp-sections hp-section-3" data-aos="fade">
            <StyledBackgroundSectionFixed
              className="fixed"
              fluid={props.data.homePageInfo.nodes[0].img_d_3.asset.fluid}
            >
              <Overlay>
                <div
                  data-aos="fade-right"
                  className="hp-section-3-text wrap-container"
                >
                  <div className="quote-wrapper">
                    <QuotesSVG className="quotes" />
                  </div>
                  <p>{props.data.homePageInfo.nodes[0].description_3}</p>
                </div>
              </Overlay>
            </StyledBackgroundSectionFixed>
          </div>
          {/* image right - text left*/}
          <div className="hp-sections hp-section-4">
            <div data-aos="slide-right" className="hp-section-4-text">
              <p className="handwrite-text">
                {`${props.data.homePageInfo.nodes[0].description_4
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}...`}
              </p>
              <p>
                {props.data.homePageInfo.nodes[0].description_4
                  .split(" ")
                  .slice(0, -3)
                  .slice(2)
                  .join(" ")}
              </p>
              <p className="handwrite-text">
                {`...${props.data.homePageInfo.nodes[0].description_4
                  .split(" ")
                  .slice(-3)
                  .join(" ")}`}
              </p>
            </div>
            <StyledBackgroundSection
              data-aos="slide-left"
              fluid={props.data.homePageInfo.nodes[0].img_d_4.asset.fluid}
            ></StyledBackgroundSection>
          </div>
          {/* Text top, image - bottom*/}
          <div className="hp-sections hp-section-5 wrap-container">
            <div
              data-aos="fade-up"
              data-aos-offset="-100"
              className="hp-section-5-text"
            >
              <p>{props.data.homePageInfo.nodes[0].description_5}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-100"
              className="hp-section-5-image"
            >
              <Img
                fluid={props.data.homePageInfo.nodes[0].img_d_5.asset.fluid}
              />
            </div>
          </div>
          {/* Image backgrount, text centered*/}
          <div
            data-aos="fade"
            data-aos-offset="-200"
            className="hp-sections hp-section-6"
          >
            <StyledBackgroundSectionFixed
              fluid={props.data.homePageInfo.nodes[0].img_d_6.asset.fluid}
            >
              <Overlay>
                <div
                  className="hp-section-6-text wrap-container"
                  data-aos="fade-left"
                >
                  <div className="quote-wrapper">
                    <QuotesSVG className="quotes" />
                  </div>
                  <p>{props.data.homePageInfo.nodes[0].description_6}</p>
                </div>
              </Overlay>
            </StyledBackgroundSectionFixed>
          </div>
        </div>
      </MainAboutStyle>
    </>
  );
}

export const query = graphql`
  query {
    homePageInfo: allSanityHomePage {
      nodes {
        intro
        description
        description_2
        img_d_2 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description_3
        img_d_3 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description_4
        img_d_4 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description_5
        img_d_5 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description_6
        img_d_6 {
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
