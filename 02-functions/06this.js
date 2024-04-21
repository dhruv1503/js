// earlier code

// function createUserInfo(name, age, profession){
//     const newObject = Object.create(null);
//     newObject.name = name;
//     newObject.age = age;
//     newObject.profession = profession;
//     return newObject
// }

// with this

// function createUserInfo(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;
// }

// createUserInfo.prototype.updateAge = function () {
//   return ++this.age;
// };

// const firstUser = new createUserInfo("Dhruv", 28, "Dev");
// console.log(firstUser);

// console.log(this);

// let user = {
//     name: "Dhruv",
//     profession: "Dev",
//     getDetails(){
//        return this
//     },
//     address : {
//       homeTown: "Chandigarh",
//       presentCity: "Pune",
//       getAddressDetails(){
//         return this         
//       }
//     }
// }

// this in getAddressDetails points to the immidiate parent and there is no mention ofparent's parent as it returnd 
// {
//     homeTown: "Chandigarh",
//       presentCity: "Pune",
//       getAddressDetails(){
//         return this         
//       }
// }

// console.log(user.getDetails())
// console.log(user.address.getAddressDetails())

// how does it behave with arrow funtions ? 

// let user = {
//     name: "Dhruv",
//     profession: "Dev",
//     getDetails(){
//        return this    
//     },
//    getArrowDetails : () => (this)
//  }
 
 //arrow function points to global this, incase of browser it is window obj

 // let user = {
//     name: "Dhruv",
//     profession: "Dev",
//     getDetails(){
//        return this    
//     },
//    getArrowDetails : () => (this)
//  }

// What is arrow function is nested in a normal function? 

//  let user = {
//     name: "Dhruv",
//     profession: "Dev",
//     getDetails(){
//         console.log(this)
//        const getArrowDetails = () => {
//         console.log(this)
//         return this    // Why does it not return then ? ask Shafi 
//        }
//        getArrowDetails()
//     },
//  }

// console.log(user.getDetails())

// let user = {
//     name: "Dhruv",
//     age: 28,
//     getName: function(){
//         const name = "Dhruv!"
//         return this.name
//     }
// }
// console.log(user.getName())

// What will be output? "Dhruv" or "Dhruv!"

// Output - "Dhruv"
// because this is parent object i.e. {
//     name: "Dhruv",
//     age: 28,
//     getName: function(){
//         const name = "Dhruv!"
//         return this.name
//     }
// }
// this.name = Dhruv

// function makeUser(){
//     return{
//         name : "Dhruv",
//         ref: this
//     }
// }
// const user = makeUser()
// console.log(user.ref.name)  Why no error?

// /Timer functions 

// const user = {
    
//         name : "Dhruv",
//         logMessage(){
//             console.log(this.name)
//         }
   
// }
// console.log(user.logMessage())
// setTimeout(user.logMessage(), 1000);
// setTimeout(function(){
//     user.logMessage()
// }, 1000)
 
// IMPLEMENT

// const calc = {
//     total : 0,
//     add(num){
//         this.total += num;
//         return this
//     },
//     mul(num){
//         this.total *= num;
//         return this
//     },
//     divide(num){
//         this.total /= num;
//         return this
//     },
//     subtract(num){
//         this.total -= num;
//         return this
//     }
    
// }

// const result = calc.add(10).mul(10).divide(2).subtract(5)
// console.log(result.total)
// result.add(10);
// console.log(result.total)
