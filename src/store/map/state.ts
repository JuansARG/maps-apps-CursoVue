import Mapboxgl from "mapbox-gl";

export interface MapState {
    distance?: number;
    duration?: number;
    map?: Mapboxgl.Map;
    markers: Mapboxgl.Marker[];
}

function state(): MapState {
    return {
        distance: undefined,
        duration: undefined,
        map: undefined,
        markers: [],
    };
}

export default state;
