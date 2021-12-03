//Rotate an array by k times using Annonymous Function and IIFE

//Anonymous Function
let arr=[ 1, 2, 3, 4, 10, 5 ];
let rotateArray = function(nums, k) {
  console.log(`\nProgram to rotate an array ${k} time using Anonymous function.\nOriginal array\t: ${nums}`);
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));
  
  console.log(`Resultant Array\t: ${nums}`);
}
rotateArray(arr,3);

//IIFE Function
arr=[ 1, 2, 3, 4, 10, 5 ];
(function(nums, k) {
  console.log(`\nProgram to rotate an array ${k} time using IIFE function.\nOriginal array\t: ${nums}`);
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  console.log(`Resultant Array\t: ${nums}\n`);
})(arr,3);