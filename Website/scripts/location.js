
function getLocation() {
  if (navigator.geolocation) {
    let pos = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("no loaction avaiable");
    }

    window.location.href = "selector.html";
}

function showPosition(position) {
    
    userLocation = new point(position.coords.latitude,position.coords.longitude,"user");
    console.log(userLocation.x + "," + userLocation.y);
    //points.push(userLocation);
   
    drawMap();
}
