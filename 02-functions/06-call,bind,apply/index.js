console.log("connected") 
function callMe(){
	console.log(arguments)
}

function card(title, subTitle, price){
	this.title = title;
	this.price = price;
	this.subTitle = subTitle;
}

card.prototype.getPrice = function(){
	console.log(typeof(arguments))
	console.log(Array.isArray(arguments))
	console.log(arguments, this.price)
	return this.price
}

let consoleBinding = callMe.bind("Dhruv", 50)
console.log(consoleBinding);
console.log(callMe(50))
console.log(callMe.bind)
console.log(card.prototype.getPrice.call({name: "Dhruv", price: 200}, "random"))
console.log(card.prototype.getPrice.apply({name: "Dhruv", price: 200}, ["random", "notRandom"]))