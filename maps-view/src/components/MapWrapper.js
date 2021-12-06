import { Wrapper, Status } from '@googlemaps/react-wrapper';


const render = (status) => {
  if (status === Status.LOADING) return 'Loading...';
  if (status === Status.FAILURE) return 'Error';
  return null;
};

const MapWrapper = ({ mapComponent }) => {
  return (
    <Wrapper apiKey={"AIzaSyCrOHknAX3QjWVGDN2HNBBfsfBL8DXoJB4&libraries=places"} render={render}>
      {mapComponent}
    </Wrapper>
  );
};

export default MapWrapper;