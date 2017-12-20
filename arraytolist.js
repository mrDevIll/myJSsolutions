//creates a list {value:value; rest:list} from an array
//eloquent js
//modified into module

(function(exports){

exports.ToList = function(arr){
    let list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list }
    }
    return list
}

}(arrayToList = {}))


 