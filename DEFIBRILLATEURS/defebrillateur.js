/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = parseFloat(readline().replace(',', '.'));
const LAT = parseFloat(readline().replace(',', '.'));
const N = parseInt(readline());
var tab = [];
var nameDefib = [];

for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    var tmp = DEFIB.split(';');
    var n = tmp.length;
    var lon = parseFloat(tmp[n - 2].replace(',', '.'));
    var lat = parseFloat(tmp[n - 1].replace(',', '.'));

    tab.push(distance(LON, lon, LAT, lat));
    nameDefib.push(DEFIB.split(';'));
}

var index = tab.indexOf(Math.min(...tab));

console.log(nameDefib[index][1]);

function distance(LON, lon, LAT, lat) {
    var x = (LON - lon) * Math.cos((LAT + lat) / 2);
    var y = (LAT - lat);
    var sqrtX = Math.pow(x, 2);
    var sqrtY = Math.pow(y, 2);
    var d = Math.sqrt((sqrtX + sqrtY) * 6371);

    return d;
}
