import React, { useRef, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.38);
  const [lat, setLat] = useState(43.65);
  const [zoom, setZoom] = useState(11.25);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // Create a default Marker and add it to the map.
  useEffect(() => {
    if (!map.current) return;
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-79.36547, 43.64395])
      .addTo(map.current);
  });

  return (
    <Container className='my-3 main-content Map'>
      <Row>
        <h1>Map</h1>
        <Container className='text-center my-3'>
          <div ref={mapContainer} className='map-container' />
          <div className='sidebar'>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </Container>
      </Row>
    </Container>
  );
}

export default Map;
