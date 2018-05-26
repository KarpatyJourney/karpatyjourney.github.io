// Check for Geolocation support
function checkGeolocationSupport() {
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  } else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
  }
}

checkGeolocationSupport();

// Get current user's position
// window.onload = function () {
//   let startPosition = this.position;
//   const geoSuccess = function (position) {
//     startPosition = position;
//     document.getElementById('startLat').innerHTML = startPosition.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPosition.coords.longitude;
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);
// };
