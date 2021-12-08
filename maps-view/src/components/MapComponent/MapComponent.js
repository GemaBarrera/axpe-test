import { useEffect, useRef, useState, memo } from "react";

import Searcher from "../Searcher";


const MapComponent = ({ zoom, id }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 41.29722659999999, lng: 2.0830904 });

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // Add marker
  useEffect(() => {
    if (map) {
      map.setOptions({
        center,
        zoom: zoom,
        disableDefaultUI: true,
      });
    }
    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, [map, center]);

  return (
    <>
      <Searcher setCenter={setCenter} id={id} map={map} center={center} />
      <div ref={ref} style={{ width: "100%", height: "100%" }} />
    </>
  );
}

export default memo(MapComponent);
