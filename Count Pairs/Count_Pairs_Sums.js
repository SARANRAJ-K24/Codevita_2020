let y = 3;
let array_1 = [5, 5, 7, 9, 15, 2];
console.log(array_1);

let result_1 = [];
for (let index = 0; index < array_1.length; index++) {
    var plus = array_1[index] + y;
    var minus = array_1[index] - y;
    if ((plus > 0 && plus < y) || (minus > 0 && minus < y)) {
        result_1.push(array_1[index]);
    }
}
console.log(result_1);


// Example 2

let x = 2;
let array = [1, 3, 5];
console.log(array);

let result = [];
for (let index = 0; index < array.length; index++) {
    var plus = array[index] + x;
    var minus = array[index] - x;
    if ((plus > 0 && plus < x) || (minus > 0 && minus < x)) {
        result.push(array[index]);
    }
}
console.log(result);