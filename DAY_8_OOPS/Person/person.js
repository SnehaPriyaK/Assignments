/*
Write a “person” class to hold all the details.
*/
class Person{
    //static variable
    static company="Ewall Solution";
    constructor(name, empID, designation, address){
      this.name=name;
      this.empID=empID;
      this.designation=designation;
      this.address=address;
    }
    static getCompany(){
      return this.company;
    }
    display(){
      console.log(`Employee ID:${this.empID}
Employee Name:${this.name}
Designation:${this.designation}
Address:${this.address.city},${this.address.country}`);
    }
  }
  let person = new Person("Sneha Priya", 61426, "AR-Analyst", {city:"Chennai", country:"India"});
  console.log("Company:"+Person.getCompany());
  person.display();