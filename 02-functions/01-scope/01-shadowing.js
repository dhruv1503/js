// var a = 10;
// console.log(a)
// {
//     var a = 100;
//     console.log(a)
//     let b = 150;
//     const c = 200;
//     this.a = 125;
//     console.log(a)
// }
// console.log(a)
// function change(){
//     var a = 100;
//     console.log(a)
// }
// change()
// console.log(a)

// let a = 10;
// console.log(a)
// {
//     let a = 100;
//     console.log(a)
//     let b = 150;
//     const c = 200;
//     console.log(a)
// }
// console.log(a)
// function change(){
//    let a = 100;
//     console.log(a)
// }
// change()
// console.log(a)

// let a = 20;
// console.log(a)
// {
//  var a = 15;
//     console.log(a)
// }
// console.log(a)

const a = 200;
console.log(a);
{
//   console.log(a); TDZ
  const a = 100;
  console.log(a);
  {
    // console.log(a); TDZ
    const a = 50;
    console.log(a);
    {
    //   console.log(a); TDZ
      const a = 150;
      console.log(a);
    }
    console.log(a);
  }
  console.log(a);
}
