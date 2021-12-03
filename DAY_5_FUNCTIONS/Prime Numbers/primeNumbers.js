//Return all the prime numbers in an array using Annonymous Function, IIFE and Arrow Function

//Anonymous Function
let result=function (){
    var arr=[4,2,3,5,7,8,9,1,13];
    console.log(`\nPrime numbers in ${arr} using Anonymous Function are:`)
    for(let a of arr){
      let flag=0;
      if(a===1){
        flag=1;
      }
      else{
        for(let i=2;i<=a/2;i++){
         if(a%i===0){
          flag=1;
        }
      }
      }
       if(flag===0){
        console.log(a)
      }
    }
  }
  result();

  //IIFE Function
  (function (){
    var arr=[4,2,3,5,7,8,9,1,13];
    console.log(`\nPrime numbers in ${arr} using IIFE Function are:`)
    for(let a of arr){
      let flag=0;
      if(a===1){
        flag=1;
      }
      else{
        for(let i=2;i<=a/2;i++){
         if(a%i===0){
          flag=1;
        }
      }
      }
       if(flag===0){
        console.log(a)
      }
    }
  })();

  //Arrow Function
  result=()=>{
    var arr=[4,2,3,5,7,8,9,1,13];
    console.log(`\nPrime numbers in ${arr} using Arrow Function are:`)
    for(let a of arr){
      let flag=0;
      if(a===1){
        flag=1;
      }
      else{
        for(let i=2;i<=a/2;i++){
         if(a%i===0){
          flag=1;
        }
      }
      }
       if(flag===0){
        console.log(a)
      }
    }
  }
  result();