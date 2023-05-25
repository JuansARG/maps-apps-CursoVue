<template>
    <div 
        v-if="distance && duration"
        class="trip-container column">   
        <div class="col">Distancia: <strong>{{ distance }}</strong> </div>
        <div class="col">Duracion: <strong>{{ duration }}</strong></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useMapStore } from "../../composables/useMapStore";

export default defineComponent({
    name: "TripDetails",
    setup () {
        
        const { distance, duration } = useMapStore();

        return {
            distance,
            duration,
        }
    }
});
</script>

<style scoped>
.trip-container{
    background-color: white;
    border-radius: 10px;
    bottom: 35px;
    box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.2);
    font-size: 25px;
    left: 8px;
    padding: 10px;
    position: fixed;
    width: 300px;
}

strong {
    color: #42b983;
}
</style>