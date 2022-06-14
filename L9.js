var arr = [15, 12, 17, 4, 24, 18, 7, 8, 9];
var min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min)