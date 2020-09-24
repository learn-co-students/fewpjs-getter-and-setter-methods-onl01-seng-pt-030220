// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    //calculate each value using this.radius and pi
    get diameter() {
        return this.radius*2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area(){
        return Math.PI * (this.radius**2);
    }
    //calculate the radius based on the input value and set this.radius
    set diameter(newDiameter) {
        this.radius = newDiameter/2;
    }
    set circumference(newCircumference){
        this.radius = (newCircumference/Math.PI)/2
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}