// creates a n*n chessboard eloquent JS 

let chessBoard = function (n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let m = 0; m < n; m++) {
            ((i + m) % 2 == 0) ? str += " " : str += "#";
        }
        console.log(str); str = "";
    }
}