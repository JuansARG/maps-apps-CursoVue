<script lang="ts" src="./SearchBar.ts"/>

<template>

    <div class="searchbar-container">
        <input 
            class="form-control" 
            type="text" 
            placeholder="Buscar lugares..."
            v-model="searchTerm">

        <SearchResults/>

    </div>
    
</template>


<style scoped>
.searchbar-container {
    position: fixed;
    top: 12px;
    left: 8px;
    background-color: white;
    z-index: 999;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2);
    width: 300px;
    border-radius: 5px;
    overflow: hidden;
    padding: 5px;
}
input:focus {
    border-color: #42b983!important;
    box-shadow: 0 0 0 0.25rem rgba(66, 185, 131,.25);
}
</style>