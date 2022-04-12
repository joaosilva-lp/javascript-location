navigator.geolocation.getCurrentPosition(function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let url = "https://www.google.com.sa/maps/place/" + latitude + "+" + longitude + "/";
    document.write("<strong>Your location is:</strong> <br>" + "latitude: " + latitude + "<br>longitude: " + longitude + "<br><br>Now you will be redirected to google maps")
    console.log(position.coords);
    window.open(url)
});