function writeName(name){
    return `hi ${name}`
}

let greetingResult = writeName("Mercy")
console.log(greetingResult)
console.log(writeName("Anto"))
console.log(writeName("Olive"))
console.log(writeName("Faith"))
let decision;
function vote(age){
    let randomVar;
    if (!(age >= 80 || age <=18 )){
        // !(false or true) //false
        decision =  "You are too to Old to Vote Wena!"
    }
    else if(age >= 18){
        decision =  "You are allowed to vote, proceed to the checkin desk"
    }
    else{
        decision =  "You are not of legal voting age"
    }
    return decision
}
console.log(decision)

// let voter1 = vote(120)
console.log(vote(12))

function accessContent(feeBalance){
    return (feeBalance > 0) ? "You cannot access the Content, Check in with Finance" : "Content Access Successful, Happy Studying!!!"
}

console.log(accessContent(0))