// Main packages
import React from "react";
// Other components
import Footer from "./Footer";
// Styling and background
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
