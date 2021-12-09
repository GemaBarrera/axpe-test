import './styles.css';
import { useEffect, useRef, memo } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addMark } from '../../redux/features/marks/addMarkSlice';


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
  const { setCenter, mapId, map, center } = props;

  const dispatch = useDispatch()
  const searchInput = useRef(null)

  useEffect(() => {
    if (map) {
      const geocoder = new window.google.maps.Geocoder();
      const input = document.getElementById(mapId);
      const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["establishment"],
      };
      const autocomplete = new window.google.maps.places.Autocomplete(input, options || {});

      const onSearch = () => {
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
      };

      autocomplete.addListener("place_changed", onSearch);
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
      id={mapId}
      ref={searchInput}
    />
  );
};

Searcher.propTypes = {
  setCenter: PropTypes.func.isRequired, 
  mapId: PropTypes.string.isRequired, 
  map: PropTypes.object, 
  center: PropTypes.object.isRequired,
};


export default memo(Searcher);
