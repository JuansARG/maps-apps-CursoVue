/* eslint-disable @typescript-eslint/no-unused-vars */
import { usePlacesStore } from "@/composables"
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
    name: "MapView",
    setup(){

        const mapElement = ref<HTMLDivElement>()

        const { 
            isLoading,
            userLocation,
            isUserLocationReady 
        } = usePlacesStore()
        
        onMounted(() => {
            console.log(mapElement.value)
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
})