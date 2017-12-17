//creates a list {value:value; rest:list} from an array
//eloquent js
let arr = [1, 2, 3];
function arrayToList(arr) {
    let list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list }
    }
    return list
}