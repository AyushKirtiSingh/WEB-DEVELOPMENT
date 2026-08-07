function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

nice("rohan")

function sum(a,b,c=3){
    // console.log(a+b)
    console.log(a,b,c)
    return a + b + c
}

result1 = sum(3)
result2 = sum(7,5)
result3 = sum(9,5,2)

console.log("the sum of this is: ", result1)
console.log("the sum of this is: ", result2)
console.log("the sum of this is: ", result3)

const func1 = (x)=>{
    console.log("this is an arrow function", x)
}

func1(45)
func1(785)
func1(85)