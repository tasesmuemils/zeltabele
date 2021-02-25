// Main packages
import React from "react";
// Other components
import { MapComponent } from "../components/Map";
import { device } from "../components/mediaQueries";
// Styling and background
import styled from "styled-components";

const ContactInfoStyle = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(2, 1fr);

  .contact-info-text {
    section {
      padding: 10px 0;
    }

    p,
    h2 {
      margin: 0;
    }

    p {
      color: var(--color-text);
    }
  }

  // Responsive style
  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
    padding: 30px 20px;

    .contact-info-map {
      height: 300px;
    }
  }

  @media ${device.mobileL} {
    padding: 0 10px 30px 10px;
  }
`;

export function ContactsInfo(props) {
  console.log(props);
  return (
    <ContactInfoStyle>
      <div className="contact-info-text">
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
      <div className="contact-info-map">
        <MapComponent latlng={props.latlngForMap} />
      </div>
    </ContactInfoStyle>
  );
}
