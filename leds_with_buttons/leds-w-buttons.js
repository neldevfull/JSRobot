var five  = require('johnny-five');
var board = five.Board();

board.on("ready", function() {
    // Create leds
    var leds = new five.Leds([5, 4, 3, 2]);

    // Create buttons
    var buttons = new five.Buttons({
        pins: [13, 12, 11, 10],
        isPullup: true
    });

    buttons.on("press", function(button) {
        pressOrRelease(button, leds, "on");
    });

    buttons.on("release", function(button) {
        pressOrRelease(button, leds, "off");
    });
});

function pressOrRelease(button, leds, flag) {
    switch(button.pin) {
        case 13:
            flag === "on" ? leds[0].on() : leds[0].off();
            break;
        case 12:
            flag === "on" ? leds[1].on() : leds[1].off();
            break;
        case 11:
            flag === "on" ? leds[2].on() : leds[2].off();
            break;
        case 10:
            flag === "on" ? leds[3].on() : leds[3].off();
            break;
        default:
            console.log("ERROR!");
            break;
    }
}