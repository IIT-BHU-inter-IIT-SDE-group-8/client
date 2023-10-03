import React, { useEffect, useState } from 'react'
import ReactMapGl, { Marker} from 'react-map-gl'

const Map = () => {
  const [viewport, setViewport] = useState(null)
  const MapboxToken = process.env.REACT_APP_MAPBOX_TOKEN

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude)
          setViewport({
            latitude: latitude,
            longitude: longitude,
            zoom: 8,
            minZoom: 6,
            maxZoom:15
          })
        },
        (error) => {
          console.log(error)
        }
      );
    } else {
      console.log("Geolocation not available")
    }
  }, []);

  return (
    <div style={{width: "100vw", height: "100vh"}}>
    <ReactMapGl 
    mapboxAccessToken={MapboxToken}
    {...viewport}
    width="100%"
    height="100%"
    transitionDuration="200"
    mapStyle="mapbox://styles/varun-kolanu/cln2pmuk1035c01pfarg21b8v"
    onViewportChange={viewPort => setViewport(viewPort)}
    >
      <Marker
        latitude={viewport?.latitude}
        longitude={viewport?.longitude}
        draggable

      > 

      </Marker>
    </ReactMapGl>
    </div>
  )
}

export default Map;
