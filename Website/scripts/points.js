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
    p1.connect(p2);
}



let points = [
    p1 = new point(43.2532694444, -87.9146722222, 'Welcome center'),
    p2 = new point(43.2524888889, -87.9151333333, 'RP'),
    p3 = new point(43.2533083333, -87.9150111111, 'Luther'),
    p4 = new point(43.2533083333, -87.9152805556, 'Rincker Stairs'),
    p5 = new point(43.2540194444, -87.9151555556, 'Stunkle East'),
    p6 = new point(43.2541083333, -87.9161888889, 'Stunkle West'),
    p7 = new point(43.2540972222, -87.9160222222, 'Computer Science'),
    p8 = new point(43.2542861111, -87.9151222222, 'Dining Hall'),
    p9 = new point(43.2544361111, -87.9150916667, 'Chapel Hall West'),
    p10 = new point(43.254325, -87.9144583333, 'Chapel'),
    p11 = new point(43.25341933698241, -87.91623857228817, 'Lober South'),
    p12 = new point(43.2533900881995, -87.91596479271088, 'Heildleberg'),
    p13 = new point(43.253437189941685, -87.91690132770856, 'Art Gallery'),
    p14 = new point(43.253436213175235, -87.91753432904848, 'Wittenberg'),
    p15 = new point(43.25334212610049, -87.9154683692514, 'Health Services'),
    p16 = new point(43.254587898653256, -87.91508676483481, 'Bookstore'),
    p17 = new point(43.25465061703061, -87.91508001077413, 'Albrecht Stairs'),
    p18 = new point(43.254694888787476, -87.91558318829428, 'Wartberg South'),
    p19 = new point(43.254824014561216, -87.91554604096058, 'Wartberg Stairs'),
    p20 = new point(43.25470595672168, -87.91577736753862, 'Terace Room'),
    p21 = new point(43.25430338722528, -87.91372005248567, 'Chapel Hall East'),
    p22 = new point(43.25448908349317, -87.91368797069748, 'Augsburg'),
    p23 = new point(43.253819203176114, -87.91378122839954, 'Katharine'),
    p24 = new point(43.25371462408858, -87.91377603846044, 'CIC'),
    p25 = new point(43.25278771117715, -87.91560848113751, 'PT')

   

];


function connect() {

    AddConnectionsByName('Welcome Center', 'Luther');
    AddConnectionsByName('Luther', 'RP');
    AddConnectionsByName('Luther', 'Rincker Stairs');
    AddConnectionsByName('Rincker Stairs', 'Stunkle East');
    AddConnectionsByName('Stunkle East', 'Computer Science');
    AddConnectionsByName('Computer Science', 'Stunkle West');
    AddConnectionsByName('Stunkle East', 'Dining Hall');
    AddConnectionsByName('Dining Hall', 'Chapel Hall West');
    AddConnectionsByName('Chapel Hall West', 'Chapel');
    AddConnectionsByName('Rincker Stairs', 'Health Services');
    AddConnectionsByName('Health Services', 'Heildleberg');
    AddConnectionsByName('Heildleberg', 'Lober South')
    AddConnectionsByName('Lober South', 'Art Gallery');
    AddConnectionsByName('Lober South', 'Stunkle West');
    AddConnectionsByName('Art Gallery', 'Wittenberg');
    AddConnectionsByName('Dining Hall', 'Bookstore');
    AddConnectionsByName('Bookstore', 'Albrecht Stairs');
    AddConnectionsByName('Albrecht Stairs', 'Wartberg South');
    AddConnectionsByName('Wartberg South', 'Wartberg Stairs');
    AddConnectionsByName('Wartberg South', 'Terace Room');
    AddConnectionsByName('Chapel', 'Chapel Hall East');
    AddConnectionsByName('Chapel Hall East', 'Augsburg');
    AddConnectionsByName('Chapel Hall East', 'Katharine');
    AddConnectionsByName('Katharine', 'CIC');
    AddConnectionsByName('Health Services', 'PT');
}


connect();
