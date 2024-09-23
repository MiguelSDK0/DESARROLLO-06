const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

car.color = "Blue";
car.start = function() {
    console.log(`${this.brand} ${this.model} is starting...`);
};

console.log(car);
car.start();

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Honda", "Civic", 2019);

car1.color = "Red";
car1.start = function() {
    console.log(`${this.brand} ${this.model} is starting...`);
};

console.log(car1);
car1.start();

const carPrototype = {
    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
};

const car2 = Object.create(carPrototype);
car2.brand = "Ford";
car2.model = "Focus";
car2.year = 2018;

car2.color = "Green";

console.log(car2);
car2.start();