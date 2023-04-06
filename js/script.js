var lightswitch = document.getElementById("light").src
var offImage =  "img/lightswitch_off.jpg"
var onImage = "img/lightswitch_on.png"

//changing image of lightswitch from on to off
function changeImage() {
    if (document.getElementById("light").src.includes(offImage)) {
        document.getElementById("light").src = onImage ;
    } else {
        document.getElementById("light").src = offImage;
    }
}

//changing background color to white when on or black when off
function chBackcolor(white) {
    if (document.getElementById("light").src.includes(onImage)) {
        document.body.style.background = white;
    }
    else { document.body.style.background = 'black'; }
}
