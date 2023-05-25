import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-result/SearchResults.vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: "SearchBar",
    components: { SearchResults },
    setup() {

        const { searchPlacesByTerm } = usePlacesStore();

        const debounceTimeout = ref();
        const debounceValue = ref("");

        return {
            debounceValue,
            searchTerm: computed({
                // computed personalizado, debounce
                get() {
                    return debounceValue.value;
                },
                set( val: string) {

                    if( debounceTimeout.value ) clearTimeout( debounceTimeout.value )

                    debounceTimeout.value = setTimeout(() => {
                        debounceValue.value = val;
                        searchPlacesByTerm(debounceValue.value);
                    }, 500);
                }
            }),
        };
    },
});
