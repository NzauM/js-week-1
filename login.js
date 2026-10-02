let correctUsername = "Mercy"
let correctPassword = 1234
function login(username, password){
    // if both are correct, show login successful
    // if username is not correct, show that user is not found
    // if both are not correct, tell user to confirm credentials
    if(username == correctUsername && password == correctPassword){
        return "Login Successful"
    }
}