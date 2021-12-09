import styled from 'styled-components';

import MapWrapper from '../MapWrapper';
import MainMap from '../MainMap';
import SideMap from '../SideMap';

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  height: 80vh;
  margin: 2em auto;
  padding: 10px;
  background-color: lightGrey;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: ${props => `${props.width}%`};

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: ${props => props.little ? 0 : '10px' };
    height: ${props => props.little ? '45%' : '55%' };
  }
`;

const MapsGrid = () => {
  return (
    <Grid data-testid="grid">
      <MapContainer width={68}>
        <MapWrapper mapComponent={<MainMap />} />
      </MapContainer>
      <MapContainer width={30} little>
        <MapWrapper mapComponent={<SideMap />} />
      </MapContainer>
    </Grid>
  )
};

export default MapsGrid;