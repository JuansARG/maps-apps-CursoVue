<script lang="ts" src="./MapView"></script>

<template>

    <div v-if="!isUserLocationReady">
        <div class="loading-map d-flex justify-content-center align-items-center">
            <div class="text-center">
                <h3>Espere por favor</h3>
                <span>Localizando....</span>
            </div>
        </div>
    </div>

    <div 
        v-show="isUserLocationReady"
        class="map-container"
        ref="mapElement"
    />

</template>

<style scoped>
.loading-map {
    background-color: rgb(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 999;
}

.map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: red;
}
</style>