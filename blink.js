var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    led = new five.Led(13);

    function myBlink() {
        led.stop().off();
        led.blink(300);

        board.wait(2000, function() {
            led.stop().off();
            led.blink(800);

            board.wait(5000, function() {
                led.stop().off();
                led.blink(300);

                board.wait(2000, function() {
                    led.stop().off();
                });
            });
        });
    }

    myBlink();
    board.loop(11400, myBlink);
});