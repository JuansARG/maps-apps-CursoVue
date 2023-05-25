import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";
import Mapboxgl from "mapbox-gl";
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";

export const useMapStore = () => {
    const store = useStore<StateInterface>();

    return {
        // State
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),
        map: computed(() => store.state.map.map),
        markers: computed(() => store.state.map.markers),
        // Getters
        isMapReady: computed<boolean>(() => store.getters["map/isMapReady"]),
        // Actions
        getRouteBetweenPoints: ( start: LngLat, end: LngLat ) => store.dispatch("map/getRouteBetweenPoints", { start, end }),
        // Mutations
        setMap: ( map: Mapboxgl.Map ) => store.commit("map/setMap", map),
        setPlaceMarkers: ( places: Feature[] ) => store.commit("map/setPlaceMarkers", places),
    }
};
