function startApp(){
    let deviceWidth = window.innerWidth, deviceHeight = window.innerHeight
    
    let list = document.getElementById('items')
    let text = "Width: "+deviceWidth+"px"
    list.innerHTML = '<li>'+text+'</li>'
    text = "Height: "+deviceHeight+"px"
    list.innerHTML += '<li>'+text+'</li>'

    if(navigator.geolocation){
        var position = navigator.geolocation.watchPosition(showPosition)
    }else alert("Location permission required")
}
function showPosition(position){
    let list = document.getElementById('items')
    let latitude = "Latitude: "+position.coords.latitude
    let longitude = "Longitude: "+position.coords.longitude
    list.innerHTML += '<li>'+latitude+'</li>'
    list.innerHTML += '<li>'+longitude+'</li>'
}