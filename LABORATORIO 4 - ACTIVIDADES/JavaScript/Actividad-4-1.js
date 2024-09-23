const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet();

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Alice", 25);
person1.greet();

const person2 = new Person("Bob", 40);
person2.greet();

const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const person3 = Object.create(personPrototype);
person3.name = "Charlie";
person3.age = 35;

person3.greet();