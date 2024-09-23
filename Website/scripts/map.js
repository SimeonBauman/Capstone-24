let scale = 1;
let hasPath = false;
(async function () {
    await new Promise(r => setTimeout(r, 5));

    setBackground();
    getLocation();
    
    
    //scalePoints(0,400);
    //drawMap();
})();


function setBackground() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var background = new Image();
    background.src = "https://simeonbauman.github.io/Capstone-24/Website/images/CUW-map.png";

    background.onload = function () {
        context.drawImage(background, 0, 0);
    }
}

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


let xAddition = 0;
let xMult = -1;
let yAddition = 0;
let yMult = -1;
let scalar = 2;
function scalePoints(min, max){
    max -= 10;
    let xMin = points[0].x;
    let yMin = points[0].y;
    for(let i = 1; i < points.length; i++){
        if(points[i].x < xMin) xMin = points[i].x;
        if(points[i].y < yMin) yMin = points[i].y;
    }
    xAddition = -xMin;
    yAddition = -yMin;
    
    
    let xMax = points[0].x + xAddition;
    let yMax = points[0].y + yAddition;
    for(let i = 0; i < points.length; i++){
        if((points[i].x + xAddition) > xMax) xMax = points[i].x + xAddition;
        if((points[i].y  + yAddition) > yMax) yMax = points[i].y + yAddition;
    }
    
    while(xMult == -1 || yMult == -1){
        if(xMax * scalar > max && xMult == -1) xMult = scalar - 1;
        if(yMax * scalar > max && yMult == -1) yMult = scalar - 1;
        scalar += 1;
    }
    
    
}

function scalePoint(type, val){
    if(type == 0) return ((val + xAddition) * xMult) + 5;
    if(type == 1) return ((val + yAddition) * yMult) + 5;
}


function drawPoint(point,scale){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = 'blue';
    let x = (scalePoint(0,point.x)*scale) - 10/2;
    let y = (scalePoint(1,point.y)*scale) - 10/2;
    //console.log(x);
    //console.log(y);
    context.fillRect(x,y,10,10);
}

function drawLine(p1,p2,scale){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath()
    context.moveTo(scalePoint(0,p1.x)*scale,scalePoint(1,p1.y)*scale);
    context.lineTo(scalePoint(0,p2.x)*scale,scalePoint(1,p2.y)*scale);
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.stroke();
}

function drawPath(points){
    hasPath = true;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    for(let i = 0; i < points.length-1; i++){
        context.moveTo(scalePoint(0,points[i].x) * scale ,scalePoint(1,points[i].y) *scale);
        context.lineTo(scalePoint(0,points[i+1].x) * scale ,scalePoint(1,points[i+1].y) *scale);
        context.strokeStyle = 'blue';
        context.lineWidth = 3;
        context.stroke();
    }
}

function isOnMap(point){
    if(point.x < 5 || point.x > 395 || point.y < 5 || point.y > 395) console.log("not on map");
}

function useSlider(val){
    val/=100;
    scale = val;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    console.log(val);
}


