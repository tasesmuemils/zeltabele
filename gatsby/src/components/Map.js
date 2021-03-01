// Main packages
import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map(props) {
  console.log(props);
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={props.coordinate}
      defaultOptions={{
        streetViewControl: false,
        mapTypeControl: false,
        panControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
    >
      {
        <Marker position={props.coordinate}>
          <InfoWindow>
            <div>
              <p>{props.address}</p>
            </div>
          </InfoWindow>
        </Marker>
      }
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export function MapComponent(props) {
  console.log(props);
  return (
    <WrappedMap
      fullscreenControl={false}
      coordinate={props.latlng}
      address={props.address}
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GOOGLE_MAP_KEY}`}
      loadingElement={<div style={{ height: `100%`, borderRadius: `20px` }} />}
      containerElement={
        <div
          style={{
            height: `100%`,
            borderRadius: `20px`,
          }}
        />
      }
      mapElement={<div style={{ height: `100%`, borderRadius: `20px` }} />}
    />
  );
}
