//Convert all the strings to title caps in a string array using Anonymous Function, IIFE and Arrow Function

//Anonymous Function
let result=function (){
    var str=["kavith", "kasi", "priya", "kavi", "bala"];
    console.log("\nTitle Captalize an array of String using Anonymous Function");
    console.log("Original Array\t: ",str)
    for(let i=0; i<str.length; i++){
      str[i]=str[i][0].toUpperCase()+str[i].slice(1);
    }
    console.log("Resultant Array\t: ", str)
  }
  result();

//IIFE Function
  (function (){
    var str=["kavith", "kasi", "priya", "kavi", "bala"];
    console.log("\nTitle Captalize an array of String using IIFE Function");
    console.log("Original Array\t: ",str)
    for(let i=0; i<str.length; i++){
      str[i]=str[i][0].toUpperCase()+str[i].slice(1);
    }
    console.log("Resultant Array\t: ",str)
  })();

  //Arrow Function
  result= () => {
    var str=["kavith", "kasi", "priya", "kavi", "bala"];
    console.log("\nTitle Captalize an array of String using Arrow Function");
    console.log("Original Array\t: ",str)
    for(let i=0; i<str.length; i++){
      str[i]=str[i][0].toUpperCase()+str[i].slice(1);
    }
    console.log("Resultant Array\t: ",str,"\n")
  }
  result();