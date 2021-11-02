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
console.log("Uber price:"+cab1.getTotalRare());
