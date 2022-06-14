// implement a function to find max of an array
function max(arr) {
    var m = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > m) {
            m = arr[i];
        }
    }
    return m;
}
let result = max([1, 2, 5, 3, 8, 2, 9])
console.log(result)