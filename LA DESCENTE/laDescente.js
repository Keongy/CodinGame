/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

var mountain = [];

// game loop
while (true) {
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        mountain.push(mountainH);
    }
    console.log(play());
}

function play() {
    var max = 0;
    for (var j = 0; j < mountain.length; j++) {
        if (mountain[j] > max) {
            max = mountain[j];
        }
    }
    var index = mountain.indexOf(max);
    mountain = mountain.slice(max, 1);
    return (index);
}