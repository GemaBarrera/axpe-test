import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addMark } from './features/marks/addMarkSlice';


const Input = styled.input`
  position: absolute;
  z-index: 1;
  top: 40px;
  right: 50%;
  padding: 8px;
  box-shadow: 0px 8px 10px -7px rgb(69 69 69 / 69%);
  border: none;
  border-radius: 4px;
  outline: 0;
  transform: translate(50%);
`;

const Searcher = (props) => {
  const { setCenter, id, map, center } = props;

  const dispatch = useDispatch()

  const [address, setAddress] = useState("");
  const [newPlace, setNewPlace] = useState();

  const geocoder = new window.google.maps.Geocoder();
  const input = document.getElementById(id);
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
    types: ["establishment"],
  };
  const autocomplete = new window.google.maps.places.Autocomplete(input, options);

  const onSearch = () => {
    if (map) {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        console.log("No details available for input: '" + place.name + "'");
        return;
      }
      setNewPlace(place);
      geocoder
        .geocode({ address: place.name })
        .then((result) => {
          const { results } = result;
          const firstResult = results[0];
          const location = firstResult.geometry.location;
          const lat = location.lat();
          const lng = location.lng();
          setCenter({ lat, lng });
          autocomplete.bindTo("bounds", firstResult);
          map.setCenter(place.geometry.location);
          // dispatch(addMark({address: place.name, geometry: place.geometry.location}));
        })
        .catch((e) => {
          console.log("Geocode was not successful for the following reason: " + e);
        });
    }
  };

  autocomplete.addListener("place_changed", () => onSearch());

  useEffect(() => {
    if (newPlace) dispatch(addMark(newPlace));
  }, [center]);

  return (
    <Input
      type="text"
      value={address}
      onChange={e => setAddress(e.target.value)}
      id={id}
    />
  );
};

export default Searcher;
