import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
const LocationContext = createContext();
LocationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
function LocationProvider({ children }) {
    const [viewport, setViewport] = useState(null)
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setViewport({
                        latitude: latitude,
                        longitude: longitude,
                        zoom: 8,
                        minZoom: 6,
                        maxZoom: 15
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
        <LocationContext.Provider value={{ viewport, setViewport }}
        >
            {children}
        </LocationContext.Provider>
    );
}

export { LocationProvider, LocationContext };