// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return `${this.radius}` * 2;
    }

    get circumference() {
        const pi = Math.PI
        return `${pi}` * (`${this.diameter}`)
    }

    get area() {
        const pi = Math.PI
        return `${pi}` * (`${this.radius}` * `${this.radius}`);
    }

        // set diameter(value) {
        //     value = `${this.radius}` * `${this.radius}`
        // }

        // set circumference(value) {
        //     const pi = Math.PI
        //     value = `${pi}` * `${this.diameter}`;
        // }

        // set area(value) {
        //     const pi = Math.PI
        //     value = `${pi}` * (`${this.radius}` * `${this.radius}`);
        // }
}