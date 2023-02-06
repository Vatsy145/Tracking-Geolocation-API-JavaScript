<div id="details"></div>
<script>
	// map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
var reqcount = 0;

navigator.geolocation.watchPosition(successCallback, errorCallback, options);

function successCallback(position) {
	const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;
    // Show a map centered at latitude / longitude.
    reqcount++;
    details.innerHTML = "Accuracy: "+accuracy+"<br>";
    details.innerHTML += "Latitude: "+latitude+" | Longitude: "+longitude+"<br>";
    details.innerHTML += "Altitude: "+altitude+"<br>";
    details.innerHTML += "Heading: "+heading+"<br>";
    details.innerHTML += "Speed: "+speed+"<br>";
    details.innerHTML += "reqcount: "+reqcount;
}
function errorCallback(error) {
	
}
var options = {
	//enableHighAccuracy: false,
	//timeout: 5000,
	//maximumAge: 0
};
</script>
