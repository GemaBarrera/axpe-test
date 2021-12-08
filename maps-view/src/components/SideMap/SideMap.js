import { memo } from 'react';
import MapComponent from '../MapComponent';


const SideMap = () => <MapComponent zoom={14} id="sidemap-search" />

export default memo(SideMap);

