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
    let longitude = document.createElement('li')
    longitude.textContent = "Longitude: "+position.coords.longitude
    list.append(longitude)
    storedB(currentDate,latitude.innerText.slice(10).trim()+" "+longitude.innerText.slice(10).trim(),currentTime)
})

let date = new Date().getDate().toString()
let month = new Date().getMonth()+1
month = (month/10 < 1) ? ('0'+month).toString() : month.toString()
let year = new Date().getFullYear().toString()
let hour = new Date().getHours().toString()
hour = (hour/10 < 1) ? ('0'+hour).toString() : hour.toString()
let minute = new Date().getMinutes().toString()
minute = (minute/10 < 1) ? ('0'+minute).toString() : minute.toString()
let second = new Date().getSeconds().toString()
second = (second/10 < 1) ? ('0'+second).toString() : second.toString()

let currentDate = date+month+year
let currentTime = hour+minute+second