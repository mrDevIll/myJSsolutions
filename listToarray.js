//listToArray creates an array from a list {value:value, rest:list} while prepend add a new element with n value to 
// the head of the list
//eloquent js

function listToArray(l) {
    let ar = [];
    for (var node = l; node; node = node.rest) {
        ar.push(node.value)
    }
    return ar
}

function prepend(n, next) {
    return { value: n, rest: next }
}