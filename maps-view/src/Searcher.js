import { useState } from "react";
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
  const dispatch = useDispatch()
  const geocoder = new window.google.maps.Geocoder();
  const { setCenter } = props;
  const [address, setAddress] = useState("");

  const onSearch = () => {
    geocoder
      .geocode({ address })
      .then((result) => {
        const { results } = result;
        const firstResult = results[0];
        const location = firstResult.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        setCenter({ lat, lng });
        dispatch(addMark({ 
          address: address,
          location: location,
        }));
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Input
      type="text"
      value={address}
      onChange={e => setAddress(e.target.value)}
      onKeyPress={handleKeyDown}
    />
  );
};

export default Searcher;
