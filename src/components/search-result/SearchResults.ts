import { defineComponent, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";

export default defineComponent({
    name: "SearchResult",
    setup() {

        const { places, isLoadingPlaces, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();

        const activePlace = ref("");

        watch( places, (newPlaces) => {
            activePlace.value = "";
            setPlaceMarkers( newPlaces );
        });

        return {
            activePlace,
            getRouteBetweenPoints,
            isLoadingPlaces,
            places,

            onPlaceClick: ( place: Feature ) => {
                activePlace.value = place.id;
                const [ lng, lat ] = place.center;
                
                map.value?.flyTo({
                    center: [ lng, lat ],
                    zoom: 14,
                });
            },

            getRouteDirections: ( place: Feature ) => {
                if( !userLocation.value ) throw new Error("onPlaceClick, userLocation is not exist");

                const [ lng, lat ] = place.center;
                const [ startLng, startLat ] = userLocation.value;
                const start: [ number, number ] = [ startLng, startLat ];
                const end: [ number, number ] = [ lng, lat ];

                getRouteBetweenPoints( start, end );
            }
        };
    },
});