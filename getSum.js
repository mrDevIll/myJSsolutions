//from codewar find the sum of all the number between to numbers, no ordinate list

function getSum(a, b) {
    let min, max, sum = 0;

    if (a == b) return a;
    if (a < b) { min = a; max = b; } else { min = b; max = a }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

}