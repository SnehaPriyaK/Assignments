//Get the location to display facts
let result=document.querySelector('.db');

//funtion to get the data
async function getData(){
    try{
        const res=await fetch('http://api.icndb.com/jokes/random/20')
        let jsonResult=await res.json();
        
        jsonResult=jsonResult.value;
        console.log(jsonResult);
        return jsonResult; 
    }
    catch(error){
        console.log(error)
    }
}

//function to display the result
async function displayData(){
    let datas= await getData();
    datas.map((data,id)=>{
        result.innerHTML+=`<td>${id+1}</td><td>${data.joke}</td>`
    });
}

displayData();