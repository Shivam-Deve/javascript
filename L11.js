var users = [
    { name: "Neha", gender: "F" },
    { name: "Shivam", gender: "M" }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].gender == "F") {
        console.log("Ms. ", users[i].name);
    } else {
        console.log("Mr. ", users[i].name);
    }
}
