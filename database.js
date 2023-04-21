import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"

const appSettings = {
    apiKey: "AIzaSyBECejO_jENvVxudZUgn-kstXsXyTUvZ98",
    authDomain: "location-accurate.firebaseapp.com",
    databaseURL: "https://location-accurate-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "location-accurate",
    storageBucket: "location-accurate.appspot.com",
    messagingSenderId: "911623596591",
    appId: "1:911623596591:web:a587e51281715f651074da"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const locationdB = ref(database,'loc')

export function storedB(loc, coordinate){
    onValue(locationdB, function(snapshot){
        console.log(Object.entries(snapshot.val()))
    })
    // push(ref(database,'loc/'+loc),coordinate)
    set(ref(database,'loc/'+loc),coordinate)
    console.log(coordinate,"pushed")
}