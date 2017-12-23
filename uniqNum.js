// There is an array with some numbers.All numbers are equal except for one.Try to find it!
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {
    let test = arr[0];
    function check(a, b, c) { if (a === b) return c; if (b == c) return a; else return b }
    function different(a, b, c) {
        if ((a != b) || (b != c)) return true;
        else return false;
    }
    for (let i = 1; i < arr.length - 1; i++) {
        if (different(test, arr[i], arr[i + 1])) return check(test, arr[i], arr[i + 1]);
        test = arr[i];
    }
}