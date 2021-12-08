import { memo } from 'react';
import MapComponent from '../MapComponent';


const MainMap = () => <MapComponent zoom={8} id="mainmap-search" />

export default memo(MainMap);
