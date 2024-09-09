
function getLocation() {
  if (navigator.geolocation) {
    //let pos = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("no loaction avaiable");
  }
}

function showPosition(position) {
    
    userLocation = new point(position.coords.latitude,position.coords.longitude,"user");
    console.log(userLocation.x + "," + userLocation.y);
    points.push(userLocation);
    scalePoints(0,400);
    drawMap();
}
