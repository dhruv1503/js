console.log("connected");
class userCreator{
	constructor(name, score){
	this.name = name;
	this.score = score;
	}
	updateScore(){
		return ++ this.score;
	}
	updateName(name){
		return this.name = name
	}
}

class premiumUserCreator extends userCreator{
	constructor(name, score){
		super(name, score)
		this.walletBalance = 0;
	}
	updateWalletBalance(walletBalance){
		if(walletBalance && typeof(walletBalance) === "number" && !isNaN(parseInt(walletBalance))){
			this.walletBalance += walletBalance;
		}
		return walletBalance
	}
}

const firstPaidUser = new premiumUserCreator("Dhruv", 100);
firstPaidUser.updateWalletBalance(10000);
console.log(firstPaidUser);
firstPaidUser.updateScore();
console.log(firstPaidUser);


// How does it work? 

// const firstPaidUser = new premiumUserCreator("Dhruv", 100);

// Whats happening here? 

// firstly, lets understand what class premiumUserCreator extends userCreator would look like

// {
// 	walletBalance : 

// 	------------------------
// 	{
// 		proto : {updateWalletBalance()}
// 		----------------------------------
// 		{
// 			proto : {
// 				updateScore(),
// 				updateName()
// 			}
//         ----------------------------------
//          proto : {
//                  userCreator(parent class)
//          }
// 		}
// 	}
// }

// entends keyword first work here is to go to userCreator class and assign it's functionalities to premiumUserCreator's protoype's prototype.
// Then extends keyword connects premiumUserCreator's protoype's prototype's prototype to the parent class i.e. userCreator
// Now, we know how object linking is done, we should know, whenever in JS we extend a class to as parent(super) dlass, this keyword gets uninitialized.
// Then super will be assigned to super, in our case it would look like this = super(name, score);
// After super is assigned, it checks the sub class's protoype and check for parent class in prototype, then it will find the function, in our case(userCreator)
// After checking memory gor userCreator and realizing, it as a function, it will go to parent's constructor
// It goes into constructor of userCreator and creates it's execution process, where it takes params (in our case, "Dhruv", 100) as params and creates an object
// {
// 	name: "Dhruv",
// 	score: 100
// 	-------------------
// 	proto : {}
// }
// ideally if we have used userCreator function, resulting object should have proto of userCreator function but here super keyword tells JS engine to the object's prototype as sub class' protoype (premiumUserCreator in our case).
// how todes obove thing happen?
// it happens with a method called as Reflect.construct(functionName, [agruments], prototype);
// what happens behind the scenes, super gets converted to Reflect.construct() and in our case Reflect.construct(userCreator, ["Dhruv", 100], premiumUserCreator.prototype)
// Now, our object looks like 
// {
// 	name : "Dhruv",
// 	score: 100
// 	----------------
// 	__proto__ : {}
// 	
// }
// This object is returned to class premiumUserCreator, before returning the object, doesn't prototype seem empty, right? prototype is not empty, super keyword also tells the reference to the proto of object created in parent class, and make it point to propt created by extents keyword above, therefore new object looks as follows
// {
	// 	name : "Dhruv",
    // 	score: 100,
//    {
// 		proto : {updateWalletBalance()}
// 		----------------------------------
// 		{
// 			proto : {
// 				updateScore(),
// 				updateName()
// 			}
//         ----------------------------------
//          proto : {
//                  userCreator(parent class)
//          }
// 		}
// 	}
// }

// now executon context of usercreator class ends and above object is returned to premiumUserCreator class there, it adds it's own elements(key, value pairs) and final object looks as follows

// {
	// 	name : "Dhruv",
    // 	score: 100,
    //  walletBalance = 0
//    {
// 		proto : {updateWalletBalance()}
// 		----------------------------------
// 		{
// 			proto : {
// 				updateScore(),
// 				updateName()
// 			}
//         ----------------------------------
//          proto : {
//                  userCreator(parent class)
//          }
// 		}
// 	 }
// }



