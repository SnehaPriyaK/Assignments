var obj = [
  { person: "Priya", age: "2", company: "GUVI" },
  { person: "Balaji", age: "5", company: "GUVI geek" },
  { person: "Kavishka", age: "8", company: "GUVI geek network" },
];
//using for loop
console.log("\nusing for loop")
for(let i=0; i<obj.length;i++){
  console.log(obj[i]);
}
//using for in loop
console.log("\nusing for in loop")
for(let item in obj){
  for(let x in obj[item]){
    console.log(`${x} : ${obj[item][x]}`);
  }
}
//using for of loop
console.log("\nusing for of loop")
for(let item of obj){
  for(let x of Object.keys(item)){
    console.log(`${x} : ${item[x]}`);
  }
}
//using forEach loop
console.log("\nusing forEach loop")
obj.forEach(item=>{
  for(let x in item){
    console.log(`${x} : ${item[x]}`);
  }
})
