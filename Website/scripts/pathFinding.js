//Calculates the distance between two points
function distance(p1,p2){
    let x = p2.x - p1.x;
    let y = p2.y - p1.y;
    x *= x;
    y *= y;
    let dist = Math.sqrt(x+y);
    return dist;
    //document.getElementById("dist").innerHTML = p1.connections[0].name;
}

//global variables used for pathfinding
let bestDistance = 100000000;
let currentPath = [];
let bestPath = [];
let destination;

//assigns the start and end points, takes the first set of the path
function findPath(start, end){
    let p1 = points[start];
    let p2 = points[end];
    
    destination = p2;
    takeSteps(p1);
    //document.getElementById("dist").innerHTML = bestDistance;
    displayPath();
}

//takes steps through all points connections. If it finds path from the start to end it calculates the total length. Avoids going in circles.
function takeSteps(node){
    currentPath.push(node);
    if(node == destination){ 
        calcDistances();
    }
    for(let i = 0; i < node.connections.length; i++){
        if(!currentPath.includes(node.connections[i])){

            takeSteps(node.connections[i]);
        }
    }
    currentPath.pop();
    return 0;
}

//Go through the current path and calculates how long it takes. If it is better than the current best is saves it as the best.
function calcDistances(){
    let currDistance = 0;
    for(let i = 0; i < currentPath.length-1; i++){
        currDistance += distance(currentPath[i],currentPath[i+1]);
    }
    if(currDistance < bestDistance){
        bestDistance = currDistance;
        bestPath = Array.from(currentPath);
    }
}

//Creates the order of locations and tells the canvas to draw the best path
function displayPath(){
    
    let val = "";
    for(let i = 0; i < bestPath.length-1; i++){
        val = val + bestPath[i].name + "->";
    }
    val+= bestPath[bestPath.length-1].name;
    console.log(val);
    drawPath(bestPath);
    createDirections(bestPath);
}




