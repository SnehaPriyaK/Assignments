//Return median of two sorted arrays of same size using Annonymous Function and IIFE


//Anonymous function
let median=function(arr1,arr2){
  let i=0,j=0, temp=0, median=0,len=0, mergedArray=[];
  for(i=0;i<arr1.length;i++){
    if(arr1[i]!==undefined)
    {
      mergedArray.push(arr1[i]);
      
    }
    if(arr2[i]!==undefined)
    {
      mergedArray.push(arr2[i]);
    }
  }
  len=mergedArray.length;
  for(i=0;i<len-1;i++)
  {
    for(j=i+1;j<len;j++){
      if(mergedArray[i]>mergedArray[j]){
        temp=mergedArray[i];
        mergedArray[i]=mergedArray[j];
        mergedArray[j]=temp;
      }
    }
  }
  console.log("Median of two sorted array using Anonymous function");
  if(len%2===0){
    i=parseInt((len-1)/2);
    j=parseInt((len+1)/2);
    median=(mergedArray[i]+mergedArray[j])/2;
  }
  else{
    i=parseInt(len/2);
    median=mergedArray[i]
  }
  console.log(`First Array\t: ${arr1} \nSecond Array\t: ${arr2} \nMedian\t\t: ${median}`);
}
const a1 = [1,2,3,4,10]
const a2 = [5,6,7,8,9];
median(a1,a2);

//IIFE function 
(function(arr1,arr2){
  let i=0,j=0, temp=0, median=0,len=0, mergedArray=[];
  for(i=0;i<arr1.length;i++){
    if(arr1[i]!==undefined)
    {
      mergedArray.push(arr1[i]);
      
    }
    if(arr2[i]!==undefined)
    {
      mergedArray.push(arr2[i]);
    }
  }
  len=mergedArray.length;
  for(i=0;i<len-1;i++)
  {
    for(j=i+1;j<len;j++){
      if(mergedArray[i]>mergedArray[j]){
        temp=mergedArray[i];
        mergedArray[i]=mergedArray[j];
        mergedArray[j]=temp;
      }
    }
  }
  console.log("\nMedian of two sorted array using IIFE function");
  if(len%2===0){
    i=parseInt((len-1)/2);
    j=parseInt((len+1)/2);
    median=(mergedArray[i]+mergedArray[j])/2;
  }
  else{
    i=parseInt(len/2);
    median=mergedArray[i]
  }
  console.log(`First Array\t: ${arr1} \nSecond Array\t: ${arr2} \nMedian\t\t: ${median}`);
})(a1,a2);