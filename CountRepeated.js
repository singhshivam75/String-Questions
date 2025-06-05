// function countRepeatedArray(arr) {
//     let result = {}; 

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         console.log(element, 'element value');
//         if (result[element] === undefined) {
//             result[element] = 1;
//             console.log(result, 'result after adding element');
//         } else {
//             result[element]++;
//             console.log(result, 'result after incrementing element');
//         }
//     }
//     console.log(result , 'final result');
// }

// let result = countRepeatedArray([1, 2, 2, 3, 3, 4, 2, 1, -1]);

// console.log('-------------------');

let arr = [1, 2, 7, 6, 1, 5, 8, 3, 5, 4, 5, 6, 7, 8, 9];

let result = {};
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element, 'element value');
    if (result[element] === undefine) {
        result[element] = 1;
        console.log(result, 'result after adding element');
    } else {
        result[element]++;
        console.log(result, 'result after incrementing element');
    }
}
console.log(result, 'final result');
