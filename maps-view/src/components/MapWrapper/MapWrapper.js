import { memo } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

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

export default memo(MapWrapper);