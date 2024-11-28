import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { env } from "src/env";

const apiKey = env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const mapId = env.NEXT_PUBLIC_GOOGLE_MAPS_API_MAP_ID;

type Poi = { key: string; location: google.maps.LatLngLiteral };

const locations: Poi[] = [
  {
    key: "masjid",
    location: { lat: 28.567904, lng: -81.5487556 },
  },
];

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

const GoogleMap = () => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{
          width: "100vw",
          height: "20vh",
        }}
        defaultCenter={{
          lat: 28.567904,
          lng: -81.5487556,
        }}
        mapId={mapId}
        defaultZoom={20}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
