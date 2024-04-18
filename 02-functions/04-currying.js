// const add = (num1) => {
//   return (num2) => {
//     return (num3) => {
//       return num1 + num2 + num3;
//     };
//   };
// };

// function evaluate(operationName) {
//   return function (num1) {
//     return function (num2) {
//       if (operationName === "sum") {
//         return num1 + num2;
//       } else if (operationName === "subtract") {
//         return num1 - num2;
//       } else if (operationName === "multiply") {
//         return num1 * num2;
//       } else if (operationName === "divide") {
//         return num1 / num2;
//       } else {
//         const error = new Error(
//           `${operationName} is not a defned evalutaion method.`
//         );
//         throw error;
//       }
//     };
//   };
//   // }
// }
// const sum = evaluate("sum");
// const mutliply = evaluate("multiply");
// const subtract = evaluate("subtract");
// const divide = evaluate("divide");

// // console.log(sum(1)(2));

// // console.log(add(1)(2)(3));
// // console.log(evaluate("divide")(12)(4));

// // common function

// function bakeCakeWithTopping(cakeType, cakeFlavour, icingFlavour) {
//   return `Made ${cakeFlavour} ${cakeType} with ${icingFlavour} icing.`;
// }

// function bake(cakeType) {
//   //Partial application
//   return function (cakeFlavour) {
//     //Partial application
//     return function (icingFlavour) {
//       return `${cakeFlavour} ${cakeType} with ${icingFlavour} icing.`;
//     };
//   };
// }

// const chocolateCakeWithVanillaIcing = bakeCakeWithTopping(
//   "cake",
//   "chocolate",
//   "vanilla"
// );
// console.log(chocolateCakeWithVanillaIcing);

// const cake = bake("cake");
// const muffin = bake("muffin");

// const chocolateCake = cake("chocolate");
// const vanillaCake = cake("vanilla");
// const carrotMuffin = muffin("carrot");

// console.log(chocolateCake("dark chocolate"));
// console.log(carrotMuffin("no"));
// console.log(vanillaCake("strawberry"));

// console.log(bake("vanilla")("muffin")("lotus biskoff"))

// Infinte currying

// function a() {
//   console.log("Hello")
//   return function (b) {
//     if (b){
//         return "Hello again"
//     }
//    return "No Hello"
//   };
// }
// a()(true)()
// It will not work as there is no function beyond b to execute, hence if second condition is true or false, return is a string and a string cannot be invoked as a function, therefor it throws an error

// function addCurring(a){
//     return function (b){
//         if (b) return addCurring(a + b)
//         return a
//     }
// }
// console.log(addCurring(1)(2)(3)(4)(5)())



// REAL WORLD EXAMPLES

// 1. DOM MAMIPULATION 

// function createElement(elementType){
//     return function(textContent){
//         const element = document.createElement(`${elementType}`);
//         element.innerText = textContent;
//         return element;
//     }
// }

// const headingWithTitle = createElement("h1")("Currying Heading");
// const headingElement = createElement("h1");


// document.body.appendChild(headingWithTitle);
// document.body.appendChild(headingElement("Element"))


// 2. API CALL 
