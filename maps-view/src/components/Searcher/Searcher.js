import { memo } from 'react';
import './styles.css';
import { useEffect, useRef } from "react";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addMark } from '../../features/marks/addMarkSlice';


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
  const searchInput = useRef(null)

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
        console.log("No details available for input: '" + place.name + "'");
        return;
      }
      dispatch(addMark(place))
      geocoder
        .geocode({ address: place.name })
        .then((result) => {
          const { results } = result;
          const firstResult = results[0];
          const location = firstResult.geometry.location;
          autocomplete.bindTo("bounds", firstResult);
          setCenter(location);
        })
        .catch((e) => {
          console.log("Geocode was not successful for the following reason: " + e);
        });
    }
  };

  useEffect(() => {
    if(map) {
      autocomplete.addListener("place_changed", () => onSearch());
    }
  }, [map, center]);

  const onClearSearch = (e) => {
    e.preventDefault();
    searchInput.current.value = ''
  };

  return (
    <Input
      type="text"
      onFocus={e => onClearSearch(e)}
      id={id}
      ref={searchInput}
    />
  );
};

export default memo(Searcher);
