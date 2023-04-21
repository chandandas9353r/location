import { storedB } from './database.js'

let deviceWidth = window.innerWidth, deviceHeight = window.innerHeight
let list = document.getElementById('items')

let item = document.createElement('li')
item.textContent = "Width: "+deviceWidth+"px"
list.append(item)
item = document.createElement('li')
item.textContent = "Height: "+deviceHeight+"px"
list.append(item)

navigator.geolocation.watchPosition(function(position){
    let latitude = document.createElement('li')
    latitude.textContent = "Latitude: "+position.coords.latitude
    list.append(latitude)
    storedB("lat",latitude.innerHTML)
    let longitude = document.createElement('li')
    longitude.textContent = "Longitude: "+position.coords.longitude
    list.append(longitude)
    storedB("lng",longitude.innerHTML)
})