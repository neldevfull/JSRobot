var five = require("../johnny-five/lib/johnny-five.js");
var board = new five.Board();

board.on("ready", function() {
    var delay = 5000;

    var semOne = {
        red: new five.Led(2),
        yellow: new five.Led(3),
        green: new five.Led(4)
    }

    var semTwo = {
        red: new five.Led(5),
        yellow: new five.Led(6),
        green: new five.Led(7)
    };

    var semThree = {
        red: new five.Led(8),
        yellow: new five.Led(9),
        green: new five.Led(10)
    };

    semOne.green.on();
    semTwo.red.on();
    semThree.red.on();

    board.wait(delay,function(){
        semOne.green.off();
        semOne.yellow.on();
    });

    delay += 2000;
    board.wait(delay,function(){
        semOne.yellow.off();
        semOne.red.on();
        semTwo.red.off();
        semTwo.green.on();
    });

    delay += 5000;
    board.wait(delay,function(){
        semTwo.green.off();
        semTwo.yellow.on();
    });

    delay += 2000;
    board.wait(delay, function() {
        semTwo.yellow.off();
        semTwo.red.on();
        semThree.red.off();
        semThree.green.on();
    });

    delay += 5000;
    board.wait(delay, function() {
        semThree.green.off();
        semThree.yellow.on();
    });

    delay += 2000;
    board.wait(delay, function() {
        semThree.yellow.off();
        semThree.red.on();
        semOne.red.off();
        semOne.green.on();
    });
});