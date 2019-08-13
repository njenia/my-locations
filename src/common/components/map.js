import React from 'react'
import Leaflet from 'leaflet'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import map from 'lodash/map'
import isNil from 'lodash/isNil'
import size from 'lodash/size'

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/'

const DEFAULT_INITIAL_POSITION = {
  lat: 32.0172861,
  lng: 34.7472542,
  zoom: 13,
}

const LocationsMap = ({className, onClick, markers, center, zoom}) => {
  const markerBounds = size(markers) > 1 ? map(markers, 'coords') : null
  return (
    <Map
      center={center || [DEFAULT_INITIAL_POSITION.lat, DEFAULT_INITIAL_POSITION.lng]}
      zoom={isNil(zoom) ? DEFAULT_INITIAL_POSITION.zoom : zoom}
      className={className}
      onClick={({latlng: {lat, lng}}) => onClick && onClick(lat, lng)}
      bounds={markerBounds}
      boundsOptions={{padding: [50, 50]}}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        map(markers, ({coords, PopupComponent}) => (
          <Marker position={coords}>
            <Popup>
              {PopupComponent}
            </Popup>
          </Marker>
        ))
      }

    </Map>
  )
}


export default LocationsMap
