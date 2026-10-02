console.log("Hello World");

// a function that takes in two numbers and returns their sum
// function calculateNetSalary(grossSalary){
//     // Calculate tax
//     // deduct tax
//     // calculate sha
//     // deduct sha
//     // add commuter allowance
//     // add internet allowance
// }

// let employee1NetSalary = calculateNetSalary(50000)

// let employee2NetSalary = calculateNetSalary(7000000)

function addNumbers(x,y){ //Parameters
    let summation = x + y
    return summation
}

let result1 = addNumbers(3,5)  //Arguments
let result2 = addNumbers(500,900)

console.log(result1,result2)

function subtract(num1,num2,num3){
    let result = num1 -num2 -num3
    return result
}



// subtract(10,5,3) //return value


let totalCollections = subtract(-1500,300,200)
console.log(totalCollections,"This is the total collections")

// Arguments

function takeTwoNumbers(num1,num2){
    let product = num1*num2;
    return product
}

console.log(takeTwoNumbers(400,500))