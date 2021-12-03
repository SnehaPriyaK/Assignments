//Sum of all numbers in an array using Annonymous Function, IIFE and Arrow Function

//Anonymous Function
let result=function (){
    var arr=[4,2,3,5,7,8,9,1,13];
    let sum=0;
    for(let a of arr){
      sum+=a;
    }
    console.log(`\nSum of ${arr} using Anonymous Function is ${sum}`);
  }
  result();

  //IIFE Function
  (function (){
    let sum=0;
    var arr=[4,2,3,5,7,8,9,1,13];
    for(let a of arr){
      sum+=a;
    }
    console.log(`\nSum of ${arr} using IIFE Function is ${sum}`);
  })();

//Arrow function
  result= () => {
    var arr=[4,2,3,5,7,8,9,1,13];
    let sum=0;
    for(let a of arr){
      sum+=a;
    }
    console.log(`\nSum of ${arr} using Arrow Function is ${sum}\n`);
  }
  result();