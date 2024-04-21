// // An object in javascript is denoted by curly brackets, it is a data structure to store key value pairs. 

// // "Everything in js an object"
// console.log("Hello")

// let name = "Dhruv";
// let age = 25;
// let profession = "developer";
// let residence = "Delhi"

// const userInfo = {
//     name : "Dhruv Aggarwal",
//     age : 28,
//     profession : "frontend development",
//     getName : () => {return userInfo.name},
//     updateAge : () => {return ++userInfo.ages}
// }

// console.log(userInfo)
// console.log(userInfo.getName())
// userInfo[residence] = "Pune Maharashtra";
// // userInfo["residence"] = "Pune, Maharashtra"
// console.log(userInfo)
// console.log(residence)


// function createUserInfo(name, age, profession){
//     const newObject = {};
//     newObject.name = name;
//     newObject.age = age;
//     newObject.profession = profession;
//     return newObject;
// }

// const firstUser = createUserInfo("Dhruv", 28, "Develper");
// const secondUser = createUserInfo("Surbhi", 28, "CA ");
// console.log(firstUser, secondUser);
// function name1(){}
// const obj1 = {};
// const obj2 = Object.create(firstUser)
// obj1.name = "Dhruv"
// obj2.name = "Dhruv"
// console.log(obj1)
// console.log(obj2)
// console.log(Object.getPrototypeOf(obj1))
// console.log(Object.getPrototypeOf(obj2))


// const user = {
//     name: "Dhruv",
//     age: 28
// }

// console.log(user.age);
// delete user.age;
// console.log(user)

// /DELETE KEYWORD
// Delete keywork is only used to delete a key, value pair from an object and not a local variable

// const func = ((a) => {
//     delete a 
//   return a
// })(5)

// console.log(func)

// How to dynamically add keys and values to an object?
// const name = "Dhruv"
// const nameKey = "name"

// const obj1 = {
//     nameKey : name                
// }
// console.log(obj1)
 // this will assign nameKey : Dhruv

// This mot the output that we imagined, now what shall we do? 

// In js we do it as follows 

// const obj2 = {
//     [nameKey] : name
// }
// Now let's see the output
// console.log(obj2)
// console.log(nameKey)
// console.log([nameKey])

// Iteration in objects


// let a = {num: 100};

// const calc = (num = a) => (num.num += 10);

// console.log(calc())
// console.log(calc())
// console.log(calc({num : 10}))
// console.log(a)

