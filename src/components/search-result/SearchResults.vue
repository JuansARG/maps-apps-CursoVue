<script lang="ts" src="./SearchResults.ts" />

<template>

    <div 
        v-if="isLoadingPlaces"    
        class="aler alert-success text-center p-2">
        <h5 class="fw-bold pt-1">Cargando</h5>
        <span>Espere por favor...</span>
    </div>


    <ul 
        v-else-if="places.length > 0"    
        class="list-group mt-3">

            <li 
                v-for="place in places"
                class="list-group-item list-group-item-action text-left"
                :class="{ 'active' : place.id === activePlace }"
                :key="place.id"
                @click="onPlaceClick( place )">
                <h5>{{ place.text }}</h5>
                <p>{{ place.place_name }}</p>
                <div align="right">
                    <button 
                        class="btn btn-sm"
                        :class="( place.id === activePlace ) ? 'btn-success' : 'btn-outline-success'"
                        @click.self="getRouteDirections(place)">
                        Direcciones
                    </button>
                </div>
            </li>

        </ul>

</template>

<style scoped>
li {
    cursor: pointer;
}
h5 {
    font-size: 15px;
}
p {
    font-size: 10px;
}
.active{
    border-color: #42b983;
    background-color: #42b983;
}
</style>