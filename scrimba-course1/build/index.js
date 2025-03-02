"use strict";
let myyName = "Himani";
let numberOfWheels = 4;
let isStudent = false;
let person1 = {
    name: "Himani",
    age: 43,
    isStudent: true,
};
let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`); // ? means it checks optional property, does it exist or not
}
// displayInfo(person1);   //Himani lives at undefined
// custom array type -------------------------------------------
let people = [person1, person2]; //array of objects  Array<Person> same as Person[]
//Literal types---------------------------------
let myName = "bob";
const myName1 = "Bob";
let userRole = "admin"; // it can only accept out of "guest" | "member" | "admin"
// Function return types ---use it to become more explicit---------------------
const users = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];
function fetchUserDetails(username) {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found`);
    }
    return user;
}
// type UpdatedUser = {
//   id?: number     // ? means making it optional
//   username?: string
//   role?: "member" | "contributor" | "admin"
// }   // creating updatedUser type of User1, instead we can use utility type
let nextUserId = 1;
const users1 = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];
//Object.assign(target, ...sources)
function updateUser(id, updates) {
    // Find the user in the array by the id
    const foundUser = users1.find((user) => { user.id === id; });
    if (!foundUser) {
        throw new Error(`User with username ${id} not found`);
        return;
    }
    // Use Object.assign to update the found user in place. 
    Object.assign(foundUser, updates);
}
// updateUser(1, {username: "new_john_doe"});
// updateUser(4, { role: "contributor" });
// Omit Utility type -> takes in a type AND a string (or union of strings) property name(s), and return a new type with those properties that are removed
function addNewUser(newUser) {
    const user = Object.assign({ id: nextUserId++ }, newUser);
    users1.push(user);
    return user;
}
addNewUser({ username: "joe_schmoe", role: "member" });
// console.log(users1);
// Generics - add felxibility to existing functions, types etc; Act like function parameters but for types; Use angle bracket syntax <>
// placeholder for whatever the type to be
const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores)); // 59
console.log(getLastItem(favoriteThings)); // warm woolen mittens
console.log(getLastItem(voters)); // warm woolen mittens
