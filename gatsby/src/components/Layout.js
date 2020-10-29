import React from "react";
import Footer from "./Footer";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyle";
import Typography from "../styles/Typography";

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      {children}
      <Footer />
    </div>
  );
}
