const numericArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry"];
const objectArray = [{name: "John"}, {name: "Jane"}, {name: "Doe"}];

let forEachOutput = "";
numericArray.forEach((num, index) => {
    forEachOutput += `Index ${index}: ${num} | `;
});
console.log("forEach Output:", forEachOutput);

const squaredNumbers = numericArray.map(num => num * num);
console.log("Squared Numbers (map):", squaredNumbers);

const evenNumbers = numericArray.filter(num => num % 2 === 0);
console.log("Even Numbers (filter):", evenNumbers);

const firstLargeNumber = numericArray.find(num => num > 3);
console.log("First Number Greater than 3 (find):", firstLargeNumber);

const sum = numericArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers (reduce):", sum);

const hasLargeNumbers = numericArray.some(num => num > 4);
console.log("Has Numbers Greater than 4 (some):", hasLargeNumbers);

const allPositive = numericArray.every(num => num > 0);
console.log("All Numbers are Positive (every):", allPositive);

let forOfOutput = "";
for (const fruit of stringArray) {
    forOfOutput += `${fruit} | `;
}
console.log("for...of Output:", forOfOutput);

const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = `
    <h3>forEach Output:</h3>
    <p>${forEachOutput}</p>
    <h3>Squared Numbers (map):</h3>
    <p>${squaredNumbers.join(", ")}</p>
    <h3>Even Numbers (filter):</h3>
    <p>${evenNumbers.join(", ")}</p>
    <h3>First Number Greater than 3 (find):</h3>
    <p>${firstLargeNumber}</p>
    <h3>Sum of Numbers (reduce):</h3>
    <p>${sum}</p>
    <h3>Has Numbers Greater than 4 (some):</h3>
    <p>${hasLargeNumbers}</p>
    <h3>All Numbers are Positive (every):</h3>
    <p>${allPositive}</p>
    <h3>for...of Output:</h3>
    <p>${forOfOutput}</p>
`;

console.assert(squaredNumbers.length === numericArray.length, "Error: El tamaño del array de números cuadrados no es correcto.");
console.assert(evenNumbers.length === 2, "Error: El tamaño del array de números pares no es correcto.");
console.assert(sum === numericArray.reduce((a, b) => a + b, 0), "Error: La suma calculada no es correcta.");
console.assert(allPositive === true, "Error: No todos los números son positivos.");

console.log("Todos los iteradores de arrays se han aplicado correctamente.");
