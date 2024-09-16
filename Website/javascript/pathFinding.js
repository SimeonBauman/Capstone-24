function distance(p1,p2){
    let x = p2.x - p1.x;
    let y = p2.y - p1.y;
    x *= x;
    y *= y;
    let dist = Math.sqrt(x+y);
    return dist;
    //document.getElementById("dist").innerHTML = p1.connections[0].name;
}

let bestDistance = 100000000;
let currentPath = [];
let bestPath = [];
let destination;

function findPath(start, end){
    let p1 = points[0];
    let p2 = points[0];
    for(let i = 0; i < points.length; i++){
        if(points[i].name == start) p1 = points[i];
        else if (points[i].name == end) p2 = points[i];
    }
    destination = p2;
    takeSteps(p1);
    document.getElementById("dist").innerHTML = bestDistance;
    displayPath();
}

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




