// Add your Circle class here
class Circle {
  constructor(radius){
    if (radius > 0) {
    this._radius = radius;
    } else {
    throw new Error('A Square cannot have negative side length');
    }
  }

  get radius(){
   return  this._radius
  }

  set radius(radius){

    if (radius > 0) {
    this._radius = radius;
    } else {
    throw new Error('A Circle cannot be  radius');
    }
  }

  get diameter(){
    return  this._radius * 2
  }

  set diameter(diameter){
    if ( diameter >0){
     this._radius = diameter / 2
   }else{
       throw new Error('A diameter cannot be negative ')
   }
  }


  get circumference(){
      return  ((this.radius * 2) * Math.PI)
  }


  set circumference(newCircumference){
      if (newCircumference >0)
      {
       this._radius = newCircumference/( 2 * Math.PI)
      }
      else
      {
          throw new Error('A Circle cannot have negative side radius')
      }
  }

  get area(){
    //pi *radius^2
    return ((this.radius * this.radius) * Math.PI)
  }

//  Define setter methods for diameter, circumference, and area

set area(newArea){
  if (newArea > 0){
     this._radius = Math.sqrt((newArea / Math.PI))
   }
  else{
    console.warn("Area cannot less than 0")
  }
}

}
