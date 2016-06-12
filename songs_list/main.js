var five   = require('johnny-five');
var extras = require('./extra.js');
var songs  = require('j5-songs');
var board  = new five.Board();

board.on("ready",function() {
    var piezo = new five.Piezo(3);

    board.repl.inject({
        piezo: piezo
    });

    var songs = [
        "beethovens-fifth",
        "mario-fanfare",
        "starwars-theme",
    ];

    extras.play_list(songs, piezo, function(err,tunes){});
});