/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var tab = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    tab.push(pi);
}

console.log(sortHorse());

function sortHorse() {
    var tmp = tab.sort((a, b) => a - b)
    var min = Infinity;

    for (var i = 0; i < tmp.length; i++) {
        if ((tmp[i] - tmp[i - 1]) < min) {
            min = Math.abs(tmp[i] - tmp[i - 1]);
        }
    }
    return min;
}