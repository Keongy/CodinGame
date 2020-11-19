
var tab = [];
var tmp = [];
var sub = [];
var rez = true;
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 9; i++) {
    var inputs = readline().split(' ');
    tab.push(inputs);
}


play();


function play() {
    checkRow();
    checkCol();
    checkSubGrid()
    console.log(rez);
}


function checkRow() {
    for (var i in tab) {
        if ([...tab[i]].sort().join() != num) {
            rez = false;
        }
    }
}

function checkCol() {
    for (var y in tab) {
        oneCol(y);
    }
}

function oneCol(y) {
    tmp = [];
    for (var i in tab) {
        tmp.push(tab[i][y]);
    }
    verif(tmp);
}

function checkSubGrid() {
    checkOneSubGrid(0, 3, 0, 3);
    checkOneSubGrid(0, 3, 3, 6);
    checkOneSubGrid(0, 3, 6, 9);

    checkOneSubGrid(3, 6, 0, 3);
    checkOneSubGrid(3, 6, 3, 6);
    checkOneSubGrid(3, 6, 6, 9);

    checkOneSubGrid(6, 9, 0, 3);
    checkOneSubGrid(6, 9, 3, 6);
    checkOneSubGrid(6, 9, 6, 9);
}

function checkOneSubGrid(x, lenghtX, y, lenghtY) {
    sub = [];
    for (var i = x; i < lenghtX; i++) {
        for (var j = y; j < lenghtY; j++) {
            sub.push(tab[i][j]);
        }
    }
    verif(sub);
}

function verif(line) {
    if (line.sort().join() != num) {
        rez = false;
    }
}
