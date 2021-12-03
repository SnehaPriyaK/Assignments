//Return all the palindromes in an array using Annonymous Function, IIFE and Arrow Function

//Anonymous Function
let result=function (){
    var arr=[232,678,345,121];
    console.log(`\nPalindrome numbers in ${arr} using Anonymous Function are:`)
    for(let a of arr){
      let temp=a, reverse=0;
      while(a>0){
        rem=a%10;
        reverse=reverse*10+rem;
        a=parseInt(a/10);
      }
      if(temp==reverse){
        console.log(temp);
      }
     
    }
  }
  result();

  //IIFE Function
  (function (){
    var arr=[232,678,345,121];
    console.log(`\nPalindrome numbers in ${arr} using IIFE Function are:`)
    for(let a of arr){
      let temp=a, reverse=0;
      while(a>0){
        rem=a%10;
        reverse=reverse*10+rem;
        a=parseInt(a/10);
      }
      if(temp==reverse){
        console.log(temp);
      }
     
    }
  })();

  result= () => {
    var arr=[232,678,345,121];
    console.log(`\nPalindrome numbers in ${arr} using Arrow Function are:`)
    for(let a of arr){
      let temp=a, reverse=0;
      while(a>0){
        rem=a%10;
        reverse=reverse*10+rem;
        a=parseInt(a/10);
      }
      if(temp==reverse){
        console.log(temp);
      }
     
    }
  }
  result();