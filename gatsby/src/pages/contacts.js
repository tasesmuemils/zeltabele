import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { MainNav } from "../components/Paths";

export default function contacts() {
  return (
    <div>
      <Nav paths={MainNav} />
      <Header headerText={`Sazinies ar Mums`} />
    </div>
  );
}
