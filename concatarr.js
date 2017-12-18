//flatten arrays e.g [[1,2,3],[4,5]] => [1,2,3,4,5]
//eloquent js


function arrConc(arr) {
    reduce(arr, function (a, b) {
        return a.concat(b);
    }, []);
}
