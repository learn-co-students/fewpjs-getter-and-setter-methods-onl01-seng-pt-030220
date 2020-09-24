// Add your Circle class here

const pi = Math.PI;

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return 2 * (pi * this.radius)
    }

    get area(){
        return pi * (this.radius * this.radius)
    }

    set circumference(circumference){
        this.radius = circumference / (pi * 2)
    }

    set diameter(diameter){
        this.radius = diameter/2
    }
}