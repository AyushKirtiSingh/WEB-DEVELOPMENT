let random = Math.random();
console.log(random)

let a = prompt("enter first number")
let c = prompt("enter the operation")
let b = prompt("enter second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random<0.1){
    //perform faulty operation
    c = obj[c];
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
