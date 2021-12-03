/*
Solving problems using array functions on rest countries data.
Get all the countries from Asia continent /region using Filter function
Get all the countries with a population of less than 2 lakhs using Filter function
Print the following details name, capital, flag using forEach function
Print the total population of countries using reduce function
Print the country which uses US Dollars as currency.
*/

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"); 
xhr.send();
xhr.onload= function (){
  if(xhr.status<=200 && xhr.status<=300){
    var countries=JSON.parse(this.response);
    
    //Get all the countries from Asia continent /region using Filter function
    let result=countries.filter(country=>country.region==="Asia").map(country=>country.name);
    console.log("\nCountries from Asia continent/region:\n",result);
    html=document.getElementById('list1');
    html.innerHTML="";
    result.forEach(element=>{
        let list=document.createElement('li');
        list.innerHTML=element;
        html.append(list)
    })

    //Get all the countries with a population of less than 2 lakhs using Filter function
    result=countries.filter(country=>country.population<200000).map(country=>country.name);
    console.log("\ncountries with a population of less than 2 lakhs:\n",result);
    html=document.getElementById('list2');
    html.innerHTML="";
    result.forEach(element=>{
        let list=document.createElement('li');
        list.innerHTML=element;
        html.append(list)
    })

    //Print the following details name, capital, flag using forEach function
    //Creating table to display the continent
    html=document.getElementById('table');
    html.innerHTML="";
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    html.appendChild(table);

    // Creating and adding heading to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Country Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Capital";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Flag";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
    countries.forEach(country=>{
        // Creating and adding heading to first row of the table
      let row = document.createElement('tr');
      let countryName = document.createElement('td');
      countryName.innerHTML = country.name;
      let capital = document.createElement('td');
      capital.innerHTML = country.capital;
      let flag = document.createElement('td');
      let flagImage= document.createElement('img');
      flagImage.src=country.flag;
      //flag.innerHTML = flagImage;
      flag.appendChild(flagImage);
      row.appendChild(countryName);
      row.appendChild(capital);
      row.appendChild(flag);
      tbody.appendChild(row);
    });

    //Print the total population of countries using reduce function
    let totalPopulation=countries.map(country=>country.population).reduce(function (result, item) {
        return result + item;
      }, 0);
    console.log("\nTotal population of countries\t: ",totalPopulation);
    html=document.getElementById('para');
    html.innerHTML="";
    totalPopulation=`Total population of countries : ${totalPopulation}`;
    html.append(totalPopulation)

    //Print the country which uses US Dollars as currency 
    result=[];
    countries.map(country=>{
        country.currencies.map(currency=>{
            if(currency.code==='USD')
            {
                result.push(country.name);
            }
        })
    })
    console.log("\nCountries which use US Dollars as currency",result)
    html=document.getElementById('list3');
    html.innerHTML="";
    result.forEach(element=>{
        let list=document.createElement('li');
        list.innerHTML=element;
        html.append(list)
    })

  }
}