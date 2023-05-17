function searchgeo(){
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        document.getElementById('long').innerHTML = longitude;
        document.getElementById('lat').innerHTML = latitude;
    })
};