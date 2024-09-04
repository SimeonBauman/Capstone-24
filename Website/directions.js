function createDirections(path){
    let dir = "";
    let head = 0;
    for(let i = 1; i < path.length-1; i++){
        let deg = cosineLaw(path[i-1],path[i],path[i+1]);
        
        if(deg < 160){
            dir += generateDirections(path[i-1],path[i],path[i+1]);
        }
    }
    console.log(dir);
}

function cosineLaw(p1,p2,p3){
    let c = distance(p1,p3);
    let a = distance(p2,p3);
    let b = distance(p1,p2);
    let temp = (c*c) - (a*a) - (b*b);
    temp /= (-2 * a * b);
    let theta = Math.acos(temp);
    theta *= (180/3.1415);
    return theta;
    
}

// Function to compute the vector from two points
function vectorFromPoints(p1, p2) {
    return {
        x: p2.x - p1.x,
        y: p2.y - p1.y
    };
}

// Function to compute the cross product of two vectors
function crossProduct(v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
}

// Function to generate directions based on a list of points
function generateDirections(p1,p2,p3) {

    const v1 = vectorFromPoints(p1, p2);
    const v2 = vectorFromPoints(p2, p3);

    const cross = crossProduct(v1, v2);
    if (cross < 0) {
        return "left";
    } else if (cross > 0) {
        return "right";
    } else {
        return "";
    }

    r
}



