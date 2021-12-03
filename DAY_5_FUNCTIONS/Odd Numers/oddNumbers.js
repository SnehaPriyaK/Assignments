//Print odd numbers in an array using Annonymous Function, IIFE and Arrow function

//Anonymous Function
let result=function (){
    var arr=[4,2,3,5,7,8,9,1,13];
    console.log(`\nOdd number in ${arr} using Anonymous Function:`)
    for(let a of arr){
      if(a%2!=0){
        console.log(a)
      }
    }
  }
  result();

  //IIFE Function
  (function (){
    var arr=[4,2,3,5,7,8,9,1,13];
    console.log(`\nOdd number in ${arr} using IIFE Function:`)
    for(let a of arr){
      if(a%2!=0){
        console.log(a)
      }
    }
  })();

  //Arrow Function
  result=()=>{
    var arr=[4,2,3,5,7,8,9,1,13];
    console.log(`\nOdd number in ${arr} using Arrow Function:`)
    for(let a of arr){
      if(a%2!=0){
        console.log(a)
      }
    }
  }
  result();