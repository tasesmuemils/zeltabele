// Main packages
import React, { createRef, useState, useEffect } from "react";
// Other components
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const VideoStyle = styled.div`
  margin: 20px;
  width: 100%;

  h2 {
    padding-bottom: 10px;
  }

  .videoWrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* Equels 16:9*/
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media ${device.tablet} {
    margin: 25px 20px 25px 20px;
    h2 {
      padding-bottom: 10px;
      font-size: 30px;
    }
  }
`;

export default function Video({ videoSrcURL, videoTitle }) {
  // Lazy loading
  const [showVideo, setShowVideo] = useState(false);
  const container = createRef();

  useEffect(() => {
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        new IntersectionObserver(onVideoIntersection, {
          rootMargin: "100px 0px",
          threshold: 0.25,
        }).observe(container.current);
      }
    } else {
      setShowVideo(true);
    }
  }, [container]);

  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      new IntersectionObserver(onVideoIntersection, {
        rootMargin: "100px 0px",
        threshold: 0.25,
      }).disconnect();
    }
  }

  return (
    <VideoStyle className="video-wrapper">
      <h2>{videoTitle}</h2>
      <div ref={container} className="videoWrapper">
        {showVideo ? (
          <iframe
            loading="lazy"
            width="560"
            height="315"
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          ></iframe>
        ) : undefined}
      </div>
    </VideoStyle>
  );
}
