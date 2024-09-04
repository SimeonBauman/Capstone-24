class point{
    constructor(x,y,name){
        this.x = x;
        this.y = y;
        this.name = name;
        this.connections = [];
    }
    
    connect(other){
        this.connections.push(other);
        other.connections.push(this);
    }
    listConnections(){
        for(let i = 0; i < this.connections.length; i++){
            console.log(this.connections[i].name);
        }
    }
}

function AddConnectionsByName(name1,name2){
    let p1 = points[0];
    let p2 = points[0];
    for(let i = 0; i < points.length; i++){
        if(points[i].name == name1) p1 = points[i];
        else if (points[i].name == name2) p2 = points[i];
    }
    p1.connections.push(p2);
    p2.connections.push(p1);
}


//scalled by * 5, added 73.6111 to x and 155.6667 to y
let points = [
     p1 = new point(43.2532694444,-87.9146722222,'Welcome center'),
     p2 = new point(43.2524888889,-87.9151333333,'RP'),
     p3 = new point(43.2533083333,-87.9150111111,'Luther'),
     p4 = new point(43.2533083333,-87.9152805556,'Rincker Stairs'),
     p5 = new point(43.2540194444,-87.9151555556,'Stunkle East'),
     p6 = new point(43.2541083333,-87.9161888889,'Stunkle West'),
     p7 = new point(43.2540972222,-87.9160222222,'Computer Science'),
     p8 = new point(43.2542861111,-87.9151222222,'Dining Hall'),
     p9 = new point(43.2544361111,-87.9150916667,'Chapel Hall West'),
     p10 = new point(43.254325,-87.9144583333,'Chapel')
   

];


AddConnectionsByName('Welcome Center','Luther');
AddConnectionsByName('Luther','RP');
AddConnectionsByName('Luther','Rincker Stairs');
AddConnectionsByName('Rincker Stairs', 'Stunkle East');
AddConnectionsByName('Stunkle East', 'Computer Science');
AddConnectionsByName('Computer Science', 'Stunkle West');
AddConnectionsByName('Stunkle East', 'Dining Hall');
AddConnectionsByName('Dining Hall', 'Chapel Hall West');
AddConnectionsByName('Chapel Hall West', 'Chapel');
