import axios from "axios";

const searchApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    params: {
        limit: 5,
        lenguage: "es",
        access_token: "pk.eyJ1IjoianVhbnNhcmRldiIsImEiOiJjbGkxdDZtcTMxcHBvM3RwOTljY2RkOHhzIn0.V2xBE3i65VpnY3dRNY0TtQ",
        fuzzyMatch: true
    }
});

export default searchApi;
