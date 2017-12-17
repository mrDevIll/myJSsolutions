//return an array starting from a starting point till the end, with an additional parameter to control the serie
//from eloquent JS
  
function range(start, end, step = 1) {
    let arr = [], r;
    if (end > start) r = (end - start);
    if (start > end) r = (start - end);

    let i = 0;
    let temp = start;
    while (i <= r) {

        arr.push(temp);
        temp += step;
        i++;
    }
    return arr
}
function sum(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }
    return somma;
}

