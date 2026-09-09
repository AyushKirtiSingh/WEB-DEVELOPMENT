let array = [1,4,67,5,3,7]

// let newarr = []

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarr.push(element**2)
    
// }

// let newarr = array.map((e,index,array)=>{
//     return e**2

// })

const greaterthanseven = (e)=>{
    if(e>7){
        return true;
    }
    return false
} 
// console.log(newarr)

// array.filter(greaterthanseven)

// console.log(array.filter(greaterthanseven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a+b
}

console.log(arr2.reduce(red))

let a = []

console.log(Array.from("harry"))