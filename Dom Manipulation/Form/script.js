//get the submit button
let submitBtn=document.getElementById('submit');

//add event listener which on a button click will invoke addDataToTable() function
submitBtn.addEventListener('click', addDataToTable);

//Select the location where the table body need to be inserted
let table=document.querySelector('tbody');

//function to add data from the form and display in the table 
function addDataToTable(){   
    let row =table.insertRow();
    //add the data from the form only if all the fields of form is filled else alert to fill all the fields
    if (
      document.getElementById("first-name").value &&
      document.getElementById("last-name").value &&
      document.querySelector('input[name="gender"]:checked')!= null &&
      document.getElementById("address").value &&
      document.getElementById("pincode").value &&
      document.getElementById("country").value &&
      document.getElementById("state").value &&
      document.getElementById("food").options.selectedIndex != -1
    ) {
      let firstname = row.insertCell();
      firstname.innerHTML = document.getElementById("first-name").value;
      document.getElementById("first-name").value = "";

      let lastname = row.insertCell();
      lastname.innerHTML = document.getElementById("last-name").value;
      document.getElementById("last-name").value = "";

      let gender = row.insertCell();
      gender.innerHTML = document.querySelector(
        'input[name="gender"]:checked'
      ).value;
      document.querySelector('input[name="gender"]:checked').checked = false;

      let address = row.insertCell();
      address.innerHTML = document.getElementById("address").value;
      document.getElementById("address").value = "";

      let pincode = row.insertCell();
      pincode.innerHTML = document.getElementById("pincode").value;
      document.getElementById("pincode").value = "";

      let country = row.insertCell();
      country.innerHTML = document.getElementById("country").value;
      document.getElementById("country").value = "";

      let state = row.insertCell();
      state.innerHTML = document.getElementById("state").value;
      document.getElementById("state").value = "";

      var selected = [];
      for (var option of document.getElementById("food").options) {
        if (option.selected) {
          selected.push(option.value);
          option.selected = false;
          $(".selectpicker").selectpicker("refresh");
        }
      }

      let food = row.insertCell();
      food.innerHTML = selected;
    }

    else{
        alert('please fill all the fields in the form');
    }


}
     
     
     
     