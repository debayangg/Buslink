let loc = document.getElementById("location");
const watchId = navigator.geolocation.watchPosition(position => {
  const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;
    loc.innerHTML = `Accuracy: ${accuracy}<br>Latitude: ${latitude}<br>Longitude: ${longitude}<br>Altitude: ${altitude}<br>Heading: ${heading}<br>Speed: ${speed}`;
});