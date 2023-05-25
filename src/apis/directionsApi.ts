import axios from "axios";

const directionsApi = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
    params: {
        alternatives: false,
        geometries: "geojson",
        overview: "simplified",
        steps: false,
        access_token: "pk.eyJ1IjoianVhbnNhcmRldiIsImEiOiJjbGkxdDZtcTMxcHBvM3RwOTljY2RkOHhzIn0.V2xBE3i65VpnY3dRNY0TtQ",
    }
});

export default directionsApi;
