import { ActionTree } from "vuex"
import { PlacesState } from "./state"
import { StateInterface } from "../index"


const actions: ActionTree<PlacesState, StateInterface> = {
    
    getInitialLocation({ commit }){
        // TODO: colocar loading
        navigator.geolocation.getCurrentPosition(
            // destructuring de la position || position.coords
            // el commit modifica el state a travez del metodo setLngLat
            // destructurin del coords, creando object
            ({ coords }) => commit("setLngLat", { lng: coords.longitude, lat: coords.latitude }),
            ( err ) => {
                console.log( err )
                throw new Error( "No geolocation!" )
            }
        )
    }

}

export default actions;