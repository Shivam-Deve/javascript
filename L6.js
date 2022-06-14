// function

function add(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}

//let result = add(1, 4);
console.log(add(1, 2))
console.log(mul(2, 5));


var shivam = {
    name: "shivam",
    loggedin: false
}

function printMessage(user) {
    if (user.loggedin) {
        return "You are loggedin"
    } else {
        return "Better luck next time";
    }
}

console.log(printMessage(shivam));
