let scale = 1;
let hasPath = false;
//this runs without stopping until HTML creates the canvas
(async function () {
    await new Promise(r => setTimeout(r, 5));

    setBackground();
    //getLocation();
    
    
    //scalePoints(0,400);
    //drawMap();
})();

//sets the canvas to the map of Concordia
function setBackground() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var background = new Image();
    background.src = "https://simeonbauman.github.io/Capstone-24/Website/images/CUW-map.png";
    
    //waits for the image to load and starts pathfinding
    background.onload = function () {
        context.drawImage(background, 0, 0);
        findPath(sessionStorage.getItem('startVal'), sessionStorage.getItem('endVal'));
        console.log(sessionStorage.getItem('startVal'));
    }
    
}
//cycles through the points and draws them with connections. Also draws a path if one exists.
function drawMap(){
    for(let i = 0; i < points.length; i++){
        drawPoint(points[i],scale);
        
        for(let j = 0; j < points[i].connections.length; j++){
            drawLine(points[i],points[i].connections[j],scale);
        }
    }
    if(hasPath){
        drawPath(bestPath);
    }
}

//Scales the global coords of the points to the size of the map
function scalePoint(point){
    f = new vector2 ((point.y +87.91804830519975) * 325821.3734674177,(-point.x + 43.25539679928404) * 430111.610908);
    return f;
}

//draws a point on the canvas given a point object
function drawPoint(point,scale){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = 'blue';
    f = scalePoint(point);
    //console.log(x);
    //console.log(y);
    context.fillRect(f.x-5,f.y-5,10,10);
}

//draws a line between two point objects
function drawLine(p1,p2,scale){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath()
    temp1 = scalePoint(p1)
    temp2 = scalePoint(p2)
    context.moveTo(temp1.x,temp1.y);
    context.lineTo(temp2.x,temp2.y);
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.stroke();
}

//given a path of connected points, this will draw the full path
function drawPath(points){
    hasPath = true;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    for(let i = 0; i < points.length-1; i++){
        temp1 = scalePoint(points[i])
        temp2 = scalePoint(points[i+1])
        context.moveTo(temp1.x,temp1.y);
        context.lineTo(temp2.x,temp2.y);
        context.strokeStyle = 'blue';
        context.lineWidth = 3;
        context.stroke();
    }
}

//checks to see if a point is within the bounds of the map (this is not in use)
function isOnMap(point){
    if(point.x < 5 || point.x > 395 || point.y < 5 || point.y > 395) console.log("not on map");
}

//Slider testing used for zooming in on the map (this is not in use)
function useSlider(val){
    val/=100;
    scale = val;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    console.log(val);
}


