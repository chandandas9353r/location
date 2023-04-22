import { storedB } from './database.js'

navigator.permissions.query({name: 'geolocation'}).then((result) => {
    let item = document.createElement('li')
    item.textContent = "Location "+result.state.toUpperCase()
    list.append(item)
})

let deviceWidth = window.outerWidth, deviceHeight = window.outerHeight
let list = document.getElementById('items')
let i = 1

let item = document.createElement('li')
item.textContent = "Width: "+deviceWidth+"px"
list.append(item)
item = document.createElement('li')
item.textContent = "Height: "+deviceHeight+"px"
list.append(item)

let cTime = new Date()
console.log(cTime.toLocaleTimeString())
item = document.createElement('li')
item.textContent = "Starting at: "+cTime.toLocaleTimeString()
list.append(item)
let fTime = new Date(cTime.getTime()+60*1000).toLocaleTimeString()
console.log(fTime)
var repeat = window.setInterval(getLocation, 10000);

function getLocation(){
    
    if(new Date().toLocaleTimeString() == fTime){
        item = document.createElement('li')
        item.textContent = "Stopped at: "+fTime
        list.append(item)
        window.clearInterval(repeat)
        repeat = null
        console.log(fTime)
        return
    }

    let date = new Date().getDate().toString()
    let month = new Date().getMonth()+1
    month = (month/10 < 1) ? ('0'+month).toString() : month.toString()
    let year = new Date().getFullYear().toString()

    let currentDate = date+month+year

    let hour = new Date().getHours().toString()
    hour = (hour/10 < 1) ? ('0'+hour).toString() : hour.toString()
    let minute = new Date().getMinutes().toString()
    minute = (minute/10 < 1) ? ('0'+minute).toString() : minute.toString()
    let second = new Date().getSeconds().toString()
    second = (second/10 < 1) ? ('0'+second).toString() : second.toString()
    
    let currentTime = hour+minute+second

    navigator.geolocation.getCurrentPosition(function(position){
        let latitude = document.createElement('li')
        latitude.textContent = i+") Latitude: "+position.coords.latitude
        list.append(latitude)
        let longitude = document.createElement('li')
        longitude.textContent = i+") Longitude: "+position.coords.longitude
        list.append(longitude)
        storedB(currentDate,latitude.innerText.slice(10).trim(),longitude.innerText.slice(10).trim(),currentTime)
        i++
    })

}
