console.log("connected");
class CreateUserInfo{
	constructor(name, age, profession){
	this.name = name;
	this.age = age;
	this.profession = profession;
	}
	updateAge(){
		++this.age
	}
	updateProfession(profession){
       this.profession = profession;
	}
}

const user1 = new CreateUserInfo("Dhruv", 28, "Developer")
console.log(user1);

user1.updateAge();
user1.updateProfession("Frontend Developer")

console.log(user1);



 