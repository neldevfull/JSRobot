var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    // Create led
    ledRed    = new five.Led(13);
    ledYellow = new five.Led(11);
    ledGreen  = new five.Led(12);
    // Create button
    buttonR = new five.Button(2);
    buttonY = new five.Button(3);
    buttonG = new five.Button(4);

    // Pressing the button lights the led
    buttonG.on("down", function() {
        board.wait(1,function(){
            ledGreen.on();
        });
    });

    // Release the button and the led is off
    buttonG.on("up", function() {
        board.wait(1,function(){
            ledGreen.off();
        });
    });

    // Pressing the button lights the led
    buttonY.on("down", function() {
        board.wait(1,function(){
            ledYellow.on();
        });
    });

    // Release the button and the led is off
    buttonY.on("up", function() {
        board.wait(1,function(){
            ledYellow.off();
        });
    });

    // Pressing the button lights the led
    buttonR.on("down", function() {
        board.wait(1,function(){
            ledRed.on();
        });
    });

    // Release the button and the led is off
    buttonR.on("up", function() {
        board.wait(1,function(){
            ledRed.off();
        });
    });
});