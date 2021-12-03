/*this.write a class to calculate uber price
*/
class UberCab{
    constructor(vehicleType,price,distance){
      this.vehicleType=vehicleType;
      this.price=price;
      this.distance=distance;
    }
    getTotalRare(){
      if(this.vehicleType=="Uber Auto"){
        return this.price*this.distance;
      }
      else if(this.vehicleType=="Go Intercity"){
        return 1.5*this.price*this.distance;
      }
      else if(this.vehicleType=="Sedan Intercity"){
        return 2*this.price*this.distance;
      }
    }
  }
  let cab1=new UberCab("Sedan Intercity",10,5);
  let cab2=new UberCab("Go Intercity",8,5);
  let cab3=new UberCab("Uber Auto",6,5);
  console.log(`Vehicle Type: ${cab3.vehicleType}\nUber price:${cab3.getTotalRare()}`);
  console.log(`Vehicle Type: ${cab2.vehicleType}\nUber price:${cab2.getTotalRare()}`);
  console.log(`Vehicle Type: ${cab1.vehicleType}\nUber price:${cab1.getTotalRare()}`);