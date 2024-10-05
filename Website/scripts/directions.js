// Function to compute the vector from two points
function vectorFromPoints(p1, p2) {
    return new vector2 (p2.x - p1.x, p2.y-p1.y);
      
}
// Function to compute the cross product of two vectors
function crossProduct(v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
}

// Function to generate directions based on a list of points
function generateDirections(points) {
    for( i  = 1; i < points.length - 1; i++)
    const v1 = vectorFromPoints(points[i-1], points[i]);
    const v2 = vectorFromPoints(points[i], points[i+1]);
    const cross = crossProduct(v1, v2);
    if (cross < 0) {
        return "left";
    } else if (cross > 0) {
        return "right";
    } else {
        return "";
    }
    
}


