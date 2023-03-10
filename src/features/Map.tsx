import React from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

import iconMarker from 'assets/icons/icon-location.svg';

const customMarker = L.icon({
  iconUrl: iconMarker,
  iconSize: [49.5, 66],
});

const Map: React.FC = () => {
  const position: LatLngExpression = [41.480416, -71.31093];

  return (
    <Box height={{ mobile: '550px', tablet: '600px' }}>
      <MapContainer style={{ height: '100%', zIndex: 0 }} center={position} zoom={15.5} zoomControl={false} attributionControl={false}>
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
