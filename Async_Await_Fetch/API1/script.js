//Get the location to display facts
let result=document.querySelector('.facts');

//funtion to get the data
async function getData(){
    try{
        const res=await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10')
        const jsonResult=await res.json();
        return jsonResult; 
    }
    catch(error){
        console.log(error)
    }
}

//function to display the result
async function displayData(){
    let catFacts= await getData();
    catFacts.map((fact,id)=>{
        result.innerHTML+=`<td>${id+1}</td> <td> ${fact.text}</td> <br/>`
    });
}

displayData();