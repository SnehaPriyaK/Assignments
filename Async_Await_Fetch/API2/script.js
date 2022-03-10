//Get the location to display facts
let result=document.querySelector('.cat-list');

//funtion to get the data
async function getData(){
    try{
        const res=await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        const jsonResult=await res.json();
        return jsonResult; 
    }
    catch(error){
        console.log(error)
    }
}

//function to display the result
async function displayData(){
    let animals= await getData();
    animals.map((animal,id)=>{
        result.innerHTML+=`<div class="card"><img class ="list" src=${animal.image_link} alt="cat" width="300" height="200"></div>`
    });
}

displayData();