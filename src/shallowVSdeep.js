let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2); //[ 1, 2, 3 ]
arr1.push(4);
console.log(arr2); //[ 1, 2, 3, 4 ]

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
console.log(arr4); //[ 1, 2, 3 ]
arr3.push(4);
console.log(arr4); //[ 1, 2, 3 ]
