import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import { searchApi } from "@/apis";
import { Feature, PlacesResponse } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        // TODO: colocar loading
        navigator.geolocation.getCurrentPosition(
            // destructuring de la position || position.coords
            // el commit modifica el state a travez del metodo setLngLat
            // destructurin del coords, creando object
            ({ coords }) =>
                commit("setLngLat", {
                    lng: coords.longitude,
                    lat: coords.latitude,
                }),
            (err) => {
                console.log(err);
                throw new Error("No geolocation!");
            }
        );
    },
    // TODO, colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]>{

        if( query.length === 0 ) {
            // en este commit no se indica el modulo porque ya estamos trabajando dentro de el
            commit("setPlaces", []);
            return [];
        }

        if( !state.userLocation ) {
            throw new Error("userLocation is not exists");
        }

        commit("setIsLoadingPlaces");

        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(",")
            }
        });

        commit("setPlaces", resp.data.features)
        return resp.data.features;
    }
};

export default actions;
