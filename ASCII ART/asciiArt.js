const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
const t = T.toUpperCase();

var tab = [];
var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var line = [];
const regexp = /[A-Z]/i;

for (let i = 0; i < H; i++) {
    const ROW = readline();
    tab.push(ROW);
}

for (var i in t) {
    for (var j in letter) {
        if (!t[i].match(regexp)) {
            line.push(26);
            break;
        } else if (letter[j] == t[i]) {
            var tmp = letter[j];
            line.push(j);
        }
    }
}

function drawLine(a) {
    var draw = [];
    for (var j in line) {
        var tmp = line[j] * L;
        draw.push(tab[a].substring(tmp, tmp + L));
    }
    console.log(draw.join(''));
}

for (var i = 0; i < H; i++) {
    drawLine(i);
}