export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; // mapsbox trabaja con logintud y latitud && google trabaja con latitud y longitud
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state;