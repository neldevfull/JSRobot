var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    // Create led
    ledRed = new five.Led(13),
    // Create button
    button = new five.Button(2);

    // Pressing the button lights the led
    button.on("down", function() {
        board.wait(1,function(){
            ledRed.on();
        });
    });

    // Release the button and the led is off
    button.on("up", function() {
        board.wait(1,function(){
            ledRed.off();
        });
    });
});