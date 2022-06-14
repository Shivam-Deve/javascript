// object
var users = [
    {
        name: "Neha",
        username: "kanjariya",
        purchases: 5,
        loggedin: true
    },
    {
        name: "Kunal",
        username: "Kunaldeve",
        purchases: 2,
        loggedin: true
    },
    {
        name: "Puja",
        username: "Pujadeve",
        purchases: 2,
        loggedin: false
    },
    {
        name: "Shivam",
        username: "Shivandeve",
        purchases: 2,
        loggedin: false
    }
];

for (let i = 0; i < users.length; i++) {

}

function printMessage(user) {
    if (user.loggedin == true) {
        console.log(user.name, ", You are loggedin");
    } else {
        console.log(user.name, ", Sorry! Better luck next Time")
    }
}

