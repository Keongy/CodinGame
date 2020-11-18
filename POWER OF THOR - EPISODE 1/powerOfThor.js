/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print thorPositionX and thorPositionY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
var thorPositionX = initialTx;
var thorPositionY = initialTy;


// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.



    if (thorPositionY > lightY && thorPositionX == lightX) {
        console.log('N')
        thorPositionY--
    }
    else if (thorPositionY < lightY && thorPositionX == lightX) {
        console.log('S')
        thorPositionY++
    }
    else if (thorPositionX < lightX && thorPositionY == lightY) {
        console.log('E')
        thorPositionX++
    }
    else if (thorPositionX > lightX && thorPositionY == lightY) {
        console.log('W')
        thorPositionX--
    }
    else if (thorPositionY > lightY && thorPositionX < lightX) {
        console.log('NE')
        thorPositionY--
        thorPositionX++
    }
    else if (thorPositionY < lightY && thorPositionX < lightX) {
        console.log('SE')
        thorPositionY++
        thorPositionX++
    }
    else if (thorPositionY < lightY && thorPositionX > lightX) {
        console.log('SW')
        thorPositionY++
        thorPositionX--
    }
    else if (thorPositionY > lightY && thorPositionX > lightX) {
        console.log('NW')
        thorPositionY--
        thorPositionX--
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
}
