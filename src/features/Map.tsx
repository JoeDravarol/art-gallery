import React from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from 'react-leaflet';
import L from 'leaflet';

import iconMarker from 'assets/icons/icon-location.svg';

const customMarker = new L.icon({
  iconUrl: iconMarker,
  iconSize: [49.5, 66],
});

const Map: React.FC = () => {
  const position = [41.480416, -71.31093];

  return (
    <Box>
      <MapContainer style={{ height: '550px', zIndex: '0' }} center={position} zoom={15.5} zoomControl={false} attributionControl={false}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customMarker}>
          <Popup>
            Modern Art Gallery
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  )
};

export default Map;
