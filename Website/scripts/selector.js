let userLocation = -1;

//calls the fillSelectors function as first priority when the page is loaded
window.onload = function () {
    fillSelectors()
}

//populates the lists with all possible destinations, selects the starting location if user allowed loaction
function fillSelectors() {
    var start = document.getElementById("start");
    var end = document.getElementById("end");

    if (userLocation == -1) {
        points.map((lang, i) => {
            let opt = document.createElement("option");
            opt.value = i;
            console.log(points[i].name);
            opt.innerHTML = points[i].name;
            start.append(opt);
        });
    }

    //creates a new option for each point in points
    points.map((lang, i) => {
        let opt = document.createElement("option");
        opt.value = i;
        console.log(points[i].name);
        opt.innerHTML = points[i].name;
        end.append(opt);
    });
}

//saves the start and end user selections and sends the user to the navigation page
function submit() {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    
    console.log(start.value);
    sessionStorage.setItem('startVal', start.value);
    sessionStorage.setItem('endVal', end.value);
    window.location.href = "Navigator.html";
}


