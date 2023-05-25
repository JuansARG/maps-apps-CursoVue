import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import mapboxgl from "mapbox-gl" 
mapboxgl.accessToken = "pk.eyJ1IjoianVhbnNhcmRldiIsImEiOiJjbGkxdDZtcTMxcHBvM3RwOTljY2RkOHhzIn0.V2xBE3i65VpnY3dRNY0TtQ"

if ( !navigator.geolocation ){
    alert("Tu navegador no soporta el GeoLocation")
    throw new Error("Tu navegador no soporta el GeoLocation")
}

createApp(App)
    .use(store)
    .use(router)
    .mount("#app")
