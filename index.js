// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return this.radius * this.radius * Math.PI
    }

    set diameter(diameter) {
        this.radius = diameter / 2 
    }

    set circumference(circumference) {
        this.diameter = circumference / Math.PI
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}