/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
var mimeType = {};

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase(); // file extension
    const MT = inputs[1]; // MIME type.
    mimeType[EXT] = MT;
}

function getMimeType() {
    var FNAME = readline().split('.');
    if (FNAME.length > 1) {
        var extension = FNAME.pop().toLowerCase();
        if (mimeType[extension]) {
            return (mimeType[extension]);
            // console.log(mimeType[extension]);
        }
    }
    return 'UNKNOWN';
}

for (var j = 0; j < Q; j++) {
    console.log(getMimeType());

}




