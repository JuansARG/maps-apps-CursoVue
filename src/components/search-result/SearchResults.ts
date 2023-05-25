import { defineComponent, ref } from "vue";
import { usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";

export default defineComponent({
    name: "SearchResult",
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore();

        const activePlace = ref("");

        return {
            activePlace,
            isLoadingPlaces,
            places,

            onPlaceClick: ( place: Feature ) => {
                activePlace.value = place.id;
            }
        };
    },
});