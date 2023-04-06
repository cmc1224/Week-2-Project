var on = "img/lightswitch_on.png"
var off =  "img/lightswitch_off.jpg"

//changing image of lightswitch from on to off
function changeImage() {
    if (document.getElementById("switch").src == off) {
        document.getElementById("switch").src = on ;
    } else {
        document.getElementById("switch").src = off;
    }
}

//changing background color to white when on or black when off
function chBackcolor(white) {
    if (document.getElementById("switch").src == on) {
        document.body.style.background = white;
    }
    else { document.body.style.background = 'black'; }
}
