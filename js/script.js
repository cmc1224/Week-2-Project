var lightswitch = document.getElementById("light").src
var off =  "img/lightswitch_off.jpg"
var on = "img/lightswitch_on.png"

//changing image of lightswitch from on to off
function changeImage() {
    if (document.getElementById("light").src.includes(off)) {
        document.getElementById("light").src = on ;
    } else {
        document.getElementById("light").src = off;
    }
}

//changing background color to white when on or black when off
function chBackcolor(white) {
    if (document.getElementById("light").src.includes(on)) {
        document.body.style.background = white;
    }
    else { document.body.style.background = 'black'; }
}
