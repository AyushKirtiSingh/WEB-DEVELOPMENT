console.log("hello and welcome to conditional tutorial")

let age = 45;
// let grace = 2;

// age += grace;

// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if(age==18){
    console.log("you can drive")
}
else if(age==0){
    console.log("are you kidding?")
}
else if(age==1){
    console.log("are you again kidding")
}
else{
    console.log("you cannot drive")
}

/*
i am a multiline comment.
 */

let a = 8;
let b = 4;

let c = a>b ? (a-b): (b-a);

/*
translates this to
if(a>b){
c = a-b
}
else{
    c = b-a}
 */