console.log("connected")
// INHERITENCE
// THERE MIGHT BE MULTIPLE LINES OF INHERITANCE BUT JS FOLLOWS A SINGLE LINE OF INHERITANCE. IT MEANS IT CAN INHERIT ONLY ONE INSTANCE
// const freeUser = {
//     name: "",
//     age: "",
//     score: 0,
//     printName: function() {
//         return freeUser.name
//     },
//     updateScore: function(score) {
//         score ? freeUser.score = score : ++freeUser.score
//         return freeUser.score
//     }
// }
// const paidUser = {
//         name: "",
//         age: "",
//         score: "",
//         walletBalance: 0,
//         printName: function() {
//             return paidUser.name
//         },
//         updateScore: function(score) {
//             score ? paidUser.score = score : ++paidUser.score
//             return paidUser.score
//         },
//         updateWallet: function(balance) {
//             if (typeof(balance) === "number" || !isNaN(parseInt(balance))){
//                     paidUser.walletBalance += balance
//                 }
//                 return paidUser.walletBalance
//             }
//         }
// As we can see freeUser and paidUser share many similarities, therefore some code is redundant, so how to remove it?
// const userBasicInfo = {
//     name: "",
//     age: "",
//     score: 0,
// }
// const freeUser = {
//     ...userBasicInfo
//     ,
//     printName: function() {
//         return freeUser.name
//     },
//     updateScore: function(score) {
//         score ? freeUser.score = score : ++freeUser.score
//         return freeUser.score
//     }
// }
// const paidUser = {
//     ...userBasicInfo
//     ,
//     walletBalance: 0,
//     printName: function() {
//         return paidUser.name
//     },
//     updateScore: function(score) {
//         score ? paidUser.score = score : ++paidUser.score
//         return paidUser.score
//     },
//     updateWallet: function(balance) {
//         if (typeof(balance) === "number" || !isNaN(parseInt(balance))) {
//             paidUser.walletBalance += balance
//         }
//         return paidUser.walletBalance
//     }
// }
// // here, we simply used ...spread operators to make objects inherit basic user information
// console.log(freeUser)
// console.log(paidUser)
// How did developers made inheritence possible in JS before class came into existance
// function userCreator(name, score) {
//     const newUser = Object.create(userFunctions);
//     newUser.name = name;
//     newUser.score = score ? score : 0;
//     return newUser
// }
// const userFunctions = {
//     updateScore: function() {
//         return ++this.score
//     },
//     getName: function() {
//         return this.name
//     }
// }
// const firstUser = userCreator("Dhruv", 0)
// console.log(firstUser);
// firstUser.updateScore();
// console.log(firstUser)


// function paidUserCreator(name, score, walletBalance){
// 	const newPaidUser = Object.create(paidUserFunctions);
// 	newPaidUser.name = name;
//     newPaidUser.score = score;
//     newPaidUser.walletBalance = walletBalance
//     return newPaidUser;
// }


// const paidUserFunctions = {
// 	printWalletBalance : function(){
//      return this.walletBalance;
// 	},
// 	updateWalletBalance : function(amount){
// 		if(typeof(amount) === "number" || !isNaN(parseInt(amount))){
// 			walletBalance += amount
// 		}
// 		return this.walletBalance
// 	}
// }

// const firstPaidUser = paidUserCreator("Dhruv", 28, 5000);
// console.log(firstPaidUser);

// On observing function paidUserCreator and userCreator we observe alot of similaity in both functions and we want paidUserCreator to inherit userCreator , ho shall that br achieved?
// Let's redefine paidUserCreator again

// function paidUserCreator(name, score, walletBalance){
// 	const paidUser = userCreator(name, score);
// 	paidUser.walletBalance = paidUser.walletBalance;
// 	return paidUser;
// }

// const firstPaidUser = paidUserCreator("Dhruv", 28, 5000);
// console.log(firstPaidUser);

// Now, paidUserCreator inherits userCreator, but did we obseerve anything? The prototype of paidUserObject has userFunctions and not paidUserFunctions, how to achieve that? Let's see in the following steps
// function paidUserCreator(name, score, walletBalance){
// 	const paidUser = userCreator(name, score);
// 	paidUser.walletBalance = walletBalance;
// 	Object.setPrototypeOf(paidUser, paidUserFunctions); // this commands updates prototype of as object, since paidUser already had userCreator's prototype, now it's overwrittting it.
// 	return paidUser;
// }

// const firstPaidUser = paidUserCreator("Dhruv", 28, 5000);
// console.log(firstPaidUser);

// Now paidUser has it's own functions, now the question is has intertance worked properly? Let's see, paidUser has userCreator's keys, but does it have it's methods? how to do that?, let's seee again
// we have 3 ways to do it, either change paidUserFunctions or paidUserCreator, let see both use cases.

// 1. Change the function paidUserCreator, then paid users functions object will be unchanged
// function paidUserCreator(name, score, walletBalance){
// 	const paidUser = userCreator(name, score);
// 	paidUser.walletBalance = walletBalance;
// 	Object.setPrototypeOf(paidUser, {...userFunctions, ...paidUserFunctions});
// 	return paidUser;
// }
// const firstPaidUser = paidUserCreator("Dhruv", 28, 5000);
// console.log(firstPaidUser);
// 2. Change paidUserFunctions object, then paidUserCreator would be unchanghed


// const paidUserFunctions = {
// 	...userFunctions, 
// 	printWalletBalance : function(){
//      return this.walletBalance;
// 	},
// 	updateWalletBalance : function(amount){
// 		if(typeof(amount) === "number" || !isNaN(parseInt(amount))){
// 			walletBalance += amount
// 		}
// 		return this.walletBalance
// 	}
// }

// const firstPaidUser = paidUserCreator("Dhruv", 28, 5000);
// console.log(firstPaidUser);
// console.log(firstPaidUser.getName())

// 3. Provide paidUserFunction prototype value as user function prototype
// Object.setPrototypeOf(paidUserFunctions, userFunctions);

// const paidUser = paidUserCreator("Dhruv", 10, 5000);
// console.log(paidUser)

// Now, we can say, we have completely inherited userCreator into paidUserCreator




// ****************************************************************************************************************************************************


// const user = {
// 	name : "Dhruv",
// 	age: 28,
// 	walletBalance :0,
// 	printName: function(){
// 		return this.name;
// 	},
//     updateWalletBalance : function(amount){
//           this.walletBalance += amount;
//           return this.walletBalance;
//     }
// }

// const newUser = {
// 	name : "Sanket",
// 	walletBalance : 0
// }



// ****************************************************************************************************************************************************
// .call, .bind, .apply
// console.log(user.printName.call({name: "Sanket"}));
// console.log(user.updateWalletBalance.call(newUser, 2500));
// console.log(user.updateWalletBalance.apply(newUser, [2500]));

// ****************************************************************************************************************************************************

// Inheritance in functions without returning object from frunctions and completely using this and new keyword

// function userCreator(name, score){
// 	this.name = name;
// 	this.score = score;
// }
// userCreator.prototype.updateScore = function(){
// 	return ++this.score
// }
// userCreator.prototype.updateName = function(name){
// 	this.name = name;
// 	return name;
// }

// function paidUserCreator(paidName, paidScore, walletBalance){
// 	// const paidUser = new userCreator(paidName, paidScore);
// 	userCreator.call(this, paidName, paidScore); // read on this more
// 	this.walletBalance = walletBalance;
// }

// paidUserCreator.prototype = Object.create(userCreator.prototype)

// paidUserCreator.prototype.updateWalletBalance = function(){
// 	return ++this.walletBalance
// }
// const paidUser = new paidUserCreator("Dhruv", 10, 1000);
// console.log(paidUser);
// paidUser.updateScore()
// paidUser.updateWalletBalance()
// console.log(paidUser)

function myForEach(array, iterationFunction){
	for(let i = 0; i < array.length; i++){
		
	}
}





