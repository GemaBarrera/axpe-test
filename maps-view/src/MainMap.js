import { useEffect, useRef, useState } from "react";

import Searcher from "./Searcher";

function MainMap() {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  /**
   * Because google.maps.Map requires an Element as a constructor parameter,
   * useRef is needed to maintain a mutable object
   * that will persist for the lifetime of the component.
   */
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }

  }, [ref, map]);

  // Add marker
  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom: 8 });
    }
    new window.google.maps.Marker({
      position: center,
      map
    });
  }, [map, center]);

  return (
    <>
      <Searcher setCenter={setCenter} />
      <div ref={ref} style={{ width: "100%", height: "100%" }} />
    </>
  );
}

export default MainMap;
