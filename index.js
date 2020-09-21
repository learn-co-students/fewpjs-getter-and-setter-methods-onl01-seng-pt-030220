// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    get circumference() {
        return 2 * pi * this.radius
    }

    set circumference(cir){
        this.radius = cir / 2 / pi
    }

    get area(){
        return pi * (this.radius ** 2)
    }
}