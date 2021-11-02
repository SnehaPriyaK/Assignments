class Person{
    //static variable, company name is common for all employee
    static company="Ewall Solution";
    //constructor
    constructor(name, empID, designation, address){
      this.name=name;
      this.empID=empID;
      this.designation=designation;
      this.address=address;
    }
    //static method
    static getCompany(){
      return this.company;
    }
    //Instance Method display to print all details about the person
    display(){
      console.log(`Employee ID:${this.empID} \nEmployee Name:${this.name}\nDesignation:${this.designation}\nAddress:${this.address.city},${this.address.country}`);
    }
  }
  //creating an object outside the class.
  let person = new Person("Sneha Priya", 61426, "AR-Analyst", {city:"Chennai", country:"India"});
  //call static method with class name and not object
  console.log("Company:"+Person.getCompany());
  //call instance method with object of clas Person.
  person.display();
