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
    
}


