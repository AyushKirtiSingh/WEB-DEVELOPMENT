let arr = [1,2,3,4,5];     //arrays are mutable
let arr1 = [1,2,3,4];     //arrays are mutable
let arr2 = [1,2,3];     //arrays are mutable

arr[0] = 5666;
// console.log(arr)
// console.log(arr[2])
// console.log(arr[0])

console.log(arr[1])
console.log(arr.length)

console.log(arr.toString())
console.log(arr.join(" and "))

console.log(arr.pop())
console.log(arr)

console.log(arr.push(100))
console.log(arr)

console.log(arr.shift())      //removes first element
console.log(arr)

arr.unshift("jack")      //adds element o first
console.log(arr)

delete arr[6]
console.log(arr)
console.log(arr.length)// count the arr[6] there comes empty so size will be same

arr.concat(arr1,arr2);
console.log(arr)

arr.sort();

arr.splice(1,2)     //start frm index 1 , 2 elements remove
console.log(arr)

arr.splice(1,2,22,33)    //same but 22 and 33 add at same position

arr.slice(1,3)     //remove form index 1 to 3

arr.reverse()

