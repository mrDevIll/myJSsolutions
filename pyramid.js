// displays half pyramid of n layers
//chap 2 eloquent JS
// e.g n == 7
// #
// ##
// ###
// ####
// #####
// ######
// #######



function halfPyramid(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += '#'.repeat(i + 1) + "\n";
    }
    return str;
}