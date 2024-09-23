const foo = () => {
    console.log("foobar")
}
foo();

function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "JavaScript!");

function sayHello() {
    return () => {
        console.log("Hello!");
    }
}

const firstClassFunction = sayHello();
firstClassFunction();
const exampleFunc = function() {
    console.log("Soy una función asignada a una variable.");
};

exampleFunc();
function executeFunction(fn) {
    fn();
}

executeFunction(exampleFunc);
function returnFunction() {
    return function() {
        console.log("Soy una función retornada.");
    };
}

const returnedFunc = returnFunction();
returnedFunc();
const funcArray = [exampleFunc, returnedFunc];
funcArray[0]();
funcArray[1]();
