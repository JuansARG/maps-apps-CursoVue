<template>
    <button 
        v-if="isBtnReady"
        class="btn btn-primary"
        @click="onMyLocationClick">
            Ir a mi ubicación
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { usePlacesStore } from "../../composables/usePlacesStore";
import { useMapStore } from "../../composables/useMapStore";

export default defineComponent({
    name: "MyLocationBtn",
    setup() {

        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();

        return {
            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value ),
            onMyLocationClick: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 15,
                })
            }
        }
    }
})
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>