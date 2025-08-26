// Create a Shape constructor with method area().

// Extend into Rectangle and Circle.

// Override area() for each.

class Shape {
    constructor(type) {
        this.type = type;
    }

    area() {
        return `Area formula not defined for ${this.type}`
    }
}

class Rectangle extends Shape {
    constructor(length, breath) {
        super("Rectangle");
        this.length = length;
        this.breath = breath;
    }


    area() {
        return `Area of Rectangle is ${this.length * this.breath}`
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }


    area() {
        return `Area of Circle is ${3.14 *(this.radius * this.radius)}`;
    }
}

const shape = new Shape("Square");
console.log(shape.area());

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area());

const circle = new Circle(7);
console.log(circle.area());
