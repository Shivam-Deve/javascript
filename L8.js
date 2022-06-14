var arr = [1, 2, 17, 4, 24, 18, 7, 8, 9];
var max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max)