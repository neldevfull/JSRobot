var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var temperature = new five.Thermometer({
        controller: "TMP36",
        pin: "A0"
    });

    temperature.on("change", function() {
        console.log(this.celsius + " ºC");
    });
});