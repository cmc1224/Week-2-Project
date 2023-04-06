var lightswitch = document.getElementById('light').src
var off =  "img/lightswitch_off.jpg"
var on = "img/lightswitch_on.png"

//changing image of lightswitch from on to off
function changeImage() {
    if (lightswitch == off) {
        lightswitch = on
    } else {
        lightswitch = off;
    } console.log("test")
}

//changing background color to white when on or black when off
function chBackcolor(white) {
    if (lightswitch == on) {
        document.body.style.background = white;
    }
    else { document.body.style.background = 'black'; }
}
