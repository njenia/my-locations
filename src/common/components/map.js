import React, {PureComponent} from 'react'
import Leaflet from 'leaflet'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import map from 'lodash/map'

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/'

const INITIAL_POSITION = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
}

class LocationsMap extends PureComponent {
  render() {
    const {className, onClick, markers} = this.props

    return (
      <Map
        center={[INITIAL_POSITION.lat, INITIAL_POSITION.lng]}
        zoom={INITIAL_POSITION.zoom}
        className={className}
        onClick={({latlng: {lat, lng}}) => onClick && onClick(lat, lng)}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          map(markers, ({coords, title}) => (
            <Marker position={coords}>
              <Popup>
                {title}
              </Popup>
            </Marker>
          ))
        }

      </Map>
    )
  }
}

export default LocationsMap
