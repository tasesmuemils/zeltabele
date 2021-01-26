import React from "react";
import styled from "styled-components";
import { MapComponent } from "../components/Map";

const ContactInfoStyle = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(2, 1fr);

  section {
    padding: 10px 0;
  }

  p,
  h2 {
    margin: 0;
  }
`;

export function ContactsInfo(props) {
  console.log(props);
  return (
    <ContactInfoStyle>
      <div>
        <section>
          <h2>Adrese</h2>
          <p>{props.info[0].address}</p>
        </section>
        <section>
          <h2>Darba laiks</h2>
          <p>{props.info[0].work_time}</p>
        </section>
        <section>
          <h2>E-pasts</h2>
          <p>{props.info[0].email}</p>
        </section>
        <section>
          <h2>Tālrunis</h2>
          <p>{props.info[0].phone}</p>
        </section>
      </div>
      <div>
        <MapComponent latlng={props.latlngForMap} />
      </div>
    </ContactInfoStyle>
  );
}
