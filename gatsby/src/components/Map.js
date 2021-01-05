import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export function MapComponent() {
  return (
    <WrappedMap
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDUW7I6z0oxSqg68QdZfZLSC4DsAOfwotQ`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
