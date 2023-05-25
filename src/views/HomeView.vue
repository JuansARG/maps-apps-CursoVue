<template>
  <MapView />
  <SearchBar/>
  <MyLocationBtn/>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { usePlacesStore } from "../composables"

import MapView from "@/components/map-view/MapView.vue"
import MyLocationBtn from "@/components/my-location-btn/MyLocationBtn.vue"
import SearchBar from "@/components/search-bar/SearchBar.vue"

export default defineComponent({
  name: "HomeView",
  components: { MapView, MyLocationBtn, SearchBar },
  setup() {

    usePlacesStore()

  }
});
</script>
