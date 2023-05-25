import { useMapStore, usePlacesStore } from "@/composables";
import { defineComponent, nextTick, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
    name: "MapView",
    setup() {
        const mapElement = ref<HTMLDivElement>();

        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore(); 

        onMounted(() => {
            if (isUserLocationReady.value) {
                nextTick(() => initMap());
            }
        });

        watch(isUserLocationReady, () => {
            if (isUserLocationReady.value) {
                nextTick(() => initMap());
            }
        });

        const initMap = () => {
            if (!mapElement.value) throw new Error("initMap, mapElement no exist");
            if (!userLocation.value) throw new Error("initMap, userLocation no exist");

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: "mapbox://styles/mapbox/dark-v10", // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            // offset para manipular la posicion inicial del popup
            const myLocationPopup = new Mapboxgl
                .Popup()
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aqui estoy</h4>
                    <p>Actualmente en Tandil</p>
                `);

            const myLocationMarker = new Mapboxgl
                .Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);

            setMap(map);
        };

        return {
            isUserLocationReady,
            mapElement,
        };
    },
});
