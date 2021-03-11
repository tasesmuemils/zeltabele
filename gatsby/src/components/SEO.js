// Main packages
import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          facebook
          keywords
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="lv" />
      <title>{title}</title>
      {/* Fav Icon*/}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta tags*/}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      {/* <meta charSet="utf-8" /> */}
      <meta
        name="google-site-verification"
        content="zIGUXBRkIpBCBYrqOHb4UQrObVU_AVPovA1VS7zUtyA"
      />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      {/*Open Graph*/}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}
