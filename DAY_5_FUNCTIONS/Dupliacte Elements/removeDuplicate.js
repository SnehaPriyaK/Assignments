//Remove duplicates from an array using Annonymous Function and IIFE

//Anonymous function
let duplicate=function(){
    let arr1=[1,2,3,4,10,1,3,2,5,3];
    console.log(`\nRemove duplicates from an array using Anonymous function.\nOriginal array\t:${arr1}`)
    for(let i=0;i<arr1.length-1;i++){
      for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
          for(let k=j;k<arr1.length;k++){
              arr1[k]=arr1[k+1];
          }
          arr1.pop();
        }
      }
    }
    console.log(`Resultant array\t:${arr1}`)
  }
  duplicate();
  
  //IIFE function 
  (function(){
    arr1=[1,2,3,4,10,1,3,2,5,3];
    console.log(`\nRemove duplicates from an array using IIFE function.\nOriginal array\t:${arr1}`)
    for(let i=0;i<arr1.length-1;i++){
      for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
          for(let k=j;k<arr1.length;k++){
              arr1[k]=arr1[k+1];
          }
          arr1.pop();
        }
      }
    }
    console.log(`Resultant array\t:${arr1}`)
    })();   