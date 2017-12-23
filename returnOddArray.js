// from codewar; Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let counter = [];
    function present(n, arr) { return arr.some(x => x === n); }

    function verify(n, arr) {
        if (arr.length == 0) { arr.push(n); }
        else { if (!present(n, arr)) arr.push(n); }
    }


    function odd(n, arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == n) count += 1;
        }
        if (count % 2 != 0) return true; else return false;
    }


    for (let i = 0; i < A.length; i++) {
        if (!present(A[i], counter)) {
            if (odd(A[i], A)) return A[i];
        }
        verify(A[i], A);
    }
}