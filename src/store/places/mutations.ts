import { MutationTree } from "vuex"
import { PlacesState } from "./state"


const mutation: MutationTree<PlacesState> = {
    // recibiendo object con lng y lat, estableciendo interfaz y desestructurando 
    setLngLat( state: PlacesState,  { lng, lat }: { lng: number, lat: number } ){
        state.userLocation = [lng, lat]
        state.isLoading = false
    }
    
}


export default mutation;