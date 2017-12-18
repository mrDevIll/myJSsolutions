//imperative emulation of every method
//eloquent js 

function every(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i])) return false;
    }
    return true
}
