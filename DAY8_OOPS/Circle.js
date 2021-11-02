class Circle{
    constructor(radius=1.0,color="pink"){
      this._radius=radius;
      this._color=color;
    }
    get radius(){
      return this._radius;
    }
    set radius(Radius){
      this._radius=Radius;
    }
    get color(){
      return this._color;
    }
    set color(color){
      this._color=color;
    }
    toString(){
      return `Circle of radius ${this._radius} and ${this._color} color.`
    }
    getArea(){
      return 3.14*this._radius*this._radius;
    }
    getCircumference(){
      return 2*3.14*this._radius;
    }
  }
  let circle1= new Circle();
  console.log("Constructor with no params: " + circle1.toString());
  let circle2= new Circle(3.0);
  console.log("Constructor with one param: " + circle2.toString());
  let circle3= new Circle(4.0,"Blue" );
  console.log("Constructor with two param: " + circle3.toString());
  circle3.radius=7.0;
  console.log("Radius value after set method is",circle3.radius);
  circle3.color="violet";
  console.log("Color value after set method is",circle3.color);
  console.log("Area of the circle: " + circle3.getArea());
  console.log("Circumference of circle: "+circle3.getCircumference());  
