//emulate some method
//eloquent js

function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) return true;
    }
    return false
}
