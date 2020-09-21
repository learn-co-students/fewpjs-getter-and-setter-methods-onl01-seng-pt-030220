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
    throw new Error('A Circle cannot have negative side radius');
    }
  }

  get diameter(){
    return  this._radius * 2
  }



  get circumference(){

      return  ((this.radius * 2) * Math.PI)

  }

  get area(){
    //pi *radius^2
    return ((this.radius * this.radius) * Math.PI)
  }

//  Define setter methods for diameter, circumference, and area

set diameter(radius){
  if ( radius>0){
   this._radius =(this._radius)+this._radius * 2
 }else{

     throw new Error('A Circle cannot have negative side radius')
 }
}

set circumference(radius){
    if (radius >0)
    {
     this._radius =  2 * this._radius * Math.PI
    }
    else
    {
        throw new Error('A Circle cannot have negative side radius')
    }
}

set area(radius){

  //pi *radius^2
  if (newArae > 0){
     this._radius = ((this._radius * this._radius) * Math.PI)}
  else{
    console.warn("Area cannot less than 0")
  }
}




}
