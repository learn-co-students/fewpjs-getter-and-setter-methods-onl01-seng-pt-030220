// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // diameter
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get diameter() {
        return this.radius * 2;
    }


    //circumference
    set circumference(circumference) {
        this.radius = circumference / (pi * 2);
    }

    get circumference() {
        return 2 * pi * this.radius;
    }


    //area
    set area(area) {
        this.radius = Math.sqrt(area / pi)
    }

    get area() {
        return pi * (this.radius * this.radius)
    }



}