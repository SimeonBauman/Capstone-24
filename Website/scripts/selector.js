let userLocation = -1;


window.onload = function () {
    fillSelectors()
}

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

    points.map((lang, i) => {
        let opt = document.createElement("option");
        opt.value = i;
        console.log(points[i].name);
        opt.innerHTML = points[i].name;
        end.append(opt);
    });
}

function submit() {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    
    console.log(start.value);
    sessionStorage.setItem('startVal', start.value);
    sessionStorage.setItem('endVal', end.value);
    window.location.href = "Navigator.html";
}


