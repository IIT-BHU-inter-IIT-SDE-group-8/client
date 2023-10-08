import React, { useEffect, useState, useContext } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { LocationContext } from '../contexts/LocationContext'

const Map = ({ mode }) => {
    const MapboxToken = process.env.REACT_APP_MAPBOX_TOKEN
    const [jsonData, setJsonData] = useState([]);
    const [nearestPlace, setNearestPlace] = useState(null);
    const [minDistance, setMinDistance] = useState(null)
    const { viewport, setViewport } = useContext(LocationContext)

    useEffect(() => {
        if (!viewport) {
            return
        }
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setJsonData(data.features);
                let nearest = null;
                let minDistance = Number.MAX_VALUE;

                data.features.forEach((location) => {
                    if (location.geometry && location.geometry.type === 'Point') {
                        const coords = location.geometry.coordinates;
                        const lat = coords[1];
                        const lon = coords[0];
                        const distance = calculateDistance(viewport.latitude, viewport.longitude, lat, lon);

                        if (distance < minDistance) {
                            minDistance = distance;
                            nearest = location;
                        }
                    }
                });
                setNearestPlace(nearest);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });

    }, [viewport])

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in km
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    function toRadians(degrees) {
        return (degrees * Math.PI) / 180;
    }

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {
                mode === "road" ?
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
                    </ReactMapGl> :
                    nearestPlace ? (
                        <div>
                            <h2>Nearest Place:</h2>
                            <p>Name: {nearestPlace.properties.name}</p>
                            <p>Distance: {minDistance.toFixed(2)} km</p>
                        </div>
                    ) : (
                        <p>Loading nearest place data...</p>
                    )
            }
        </div>
    )
}

export default Map;