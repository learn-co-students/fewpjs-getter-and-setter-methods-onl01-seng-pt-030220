// class Bird {
//     constructor(name) {
//         this.name = name;
//     }

//     set phrase(phrase) {
//         this._phrase = phrase
//     }

//     get speak() {
//         return `${this.name} says ${this._phrase || 'squawk'}`;
//     }
// }

// let daffy = new Bird('Daffy');
// daffy.speak; // => 'Daffy says squawk'
// daffy.phrase = "it's rabbit season!";
// daffy.speak; // => 'Daffy says it's rabbit season!'

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return (this.radius * 2)  * Math.PI
    }

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}