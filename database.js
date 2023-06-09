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

export function storedB(date, latitude, longitude, time){
    onValue(ref(database), function(snapshot){
        console.log(snapshot.val())
        if(snapshot.val() == null){
            set(ref(database,'loc/'+date+'/'+time), {
                latitude,longitude
            })
        }
    })
    // onValue(ref(database,'loc/'+date), function(snapshot){
    //     console.log(snapshot.val(),time)
    //     if(snapshot.val() == null){
    //         set(ref(database, 'loc/'+date+"/"+time), {
    //             latitude: latitude,
    //             longitude: longitude
    //         });
    //         console.log({latitude,longitude},"pushed first time")
    //         return
    //     }
    //     // let today = Object.values(snapshot.val())
    //     // let attendance = Object.values(today[today.length-1]).toString()
    //     // if(attendance != coordinate){
    //         set(ref(database, 'loc/'+date+"/"+time), {
    //             latitude: latitude,
    //             longitude: longitude
    //         });
    //         console.log({latitude,longitude},"pushed because location not same")
    //     // }
    // })
}