import { memo } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import PropTypes from 'prop-types';


const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const render = (status) => {  
  if (status === Status.LOADING) return 'Loading...';
  if (status === Status.FAILURE) return 'Error';
  return null;
};

const MapWrapper = ({ mapComponent }) => {
  return (
    <Wrapper apiKey={mapsKey} render={render}>
      {mapComponent}
    </Wrapper>
  );
};

MapWrapper.propTypes = {
  mapComponent: PropTypes.element.isRequired,
};

export default memo(MapWrapper);