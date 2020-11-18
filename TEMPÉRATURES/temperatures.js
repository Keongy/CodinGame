/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

var min = 5527;



if (n == 0 || inputs == null || inputs == '') {
    min = 0;
} else {
    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526

        if (Math.abs(t) < Math.abs(min)) {
            min = t;
        } else if (Math.abs(t) == Math.abs(min) && t > min) {
            min = t;
        }
    }
}


console.log(min)
