console.log("connected")
function createUserInfo(name, age, profession){
	console.log(arguments);
	console.log(this)
	this.name = name;
	this.age = age;
	this.profession = profession;

}

createUserInfo.prototype.updateAge = function(){
	++this.age
}

const user1 = new createUserInfo("Dhruv", 28, "Developer");
console.log(user1);

user1.updateAge()

console.log(user1);

// How does this code work
// 1. JS Engine starts;
// 2. Memory Creation Phase
 // it understands keywords sunch as var, let, const, function and assigns memory accordingly.

 // JS Engine comes across createUserInfo, it assigns it a function space.
 // when it comes across createUserInfo.prototype.updateAge();, it reads createsUserInfo, and checks the memory whether it exists, it finds its allocation as a function and after JS Engine recgnises it as a function, it sees a dot(.) and not a paranthesis or round brackets() and realises it should not go to the function execution but it has to access the object part of the function named createUserInfo, it accesses the object part of the function and assigns it's sees if it contains updateAge, it realises it does not contain anything named as updateAge in protoype  object of createUserInfo function, the it assigns updateAge keyword with empty value to the prototype of createUserInfo as updateAge has an equality sign after it, so it will access it later in execution phase.

// By end of memory execution phase it has memory allocated as follows: 

// createUserInfo = f
// updateAge = "" and assigns to createUserInfo's prototype object
// const user = <unavailable value>



// 3. Code Execution Phase
 // Line no 1 and executed console.log("connected")
// it scans till end of createUserInfo function and the encounters createUserInfo.prototype.updateAge = function(){++this.age}, now JS engine encounters createUserInfo and checks it in memory, it recognises it as a function, the after encountering a dot, it encounters .prototype.updateAge, JS engine checks whether updateAge key is present in prototype section of createUserInfo function, then it goes beyond the equality check and ecounters an anonymous function and assign it as it is.
// Now memory looks like
//   createUserInfo = f
// createUserInfo.prototype = {updateAge : f}

// Now JS Engine scans towards const user1 = new createUserInfo("Dhruv", 28, "Developer");
// it check user1 in memory and find it in memory with a constant declaration.
// now after finding user1 in memory, it goen to to assign it a value after equality operator(=), it now encounters a keyword "new", after new keyword it encounters 

//createUserInfo("Dhruv", 28, "Developer");

// after encountering this command it recognsis the function invocation with argument and creates a new functional context and passes it arguments as name = "Dhruv", age = 28, profession = "Developer". 

// const user1 = new createUserInfo("Dhruv", 28, "Developer");


// TRY THIS WITH PROPER DEBUGGER
// every normal function has a this keyword of it's own
// What is new keyword?
// 1. First it creates an empty object. {}
// 2. it assigns the empty object to the "this keyword" of that (here, createUserInfo) function. this = {}
// 3. it links the function object prototype to the dunder proto of the new obiect.   
// this = {
// ------------
// __proto__ : createUserInfo.prototype	

// }
// 4. It returns this keyword from function that we call.
// return this

// new value of user1 = {
// 	name: "Dhruv",
// 	age: 28,
// 	profession: "Developer"
// 	===========================
// 	__proto : {updateAge : function(){return ++this.age}}
// }
// 
// ******************************************. ******************. ************************************************************
// NOTE : this keyword always checks how it is called, if it is called from a function inside an object, then this always points towards object it was created in.
// Read about object invocation of an object
// ******************************************. ******************. ************************************************************
 // WHAT IS TC39 javascript

// ********* How to intercept internals of javascript ? **********
