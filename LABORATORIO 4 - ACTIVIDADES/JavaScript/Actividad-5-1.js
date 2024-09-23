const numericArray = [1, 2, 3, 4, 5];
console.log("Numeric Array (Literal):", numericArray);

const stringArray = new Array("apple", "banana", "cherry");
console.log("String Array (Constructor):", stringArray);

const objectArray = Array.of({name: "John"}, {name: "Jane"}, {name: "Doe"});
console.log("Object Array (Array.of()):", objectArray);

numericArray.push(6, 7);
console.log("Updated Numeric Array:", numericArray);


stringArray.push("date", "elderberry");
console.log("Updated String Array:", stringArray);


objectArray.push({name: "Smith"}, {name: "Alice"});
console.log("Updated Object Array:", objectArray);


const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = `
    <h3>Numeric Array:</h3>
    <p>${numericArray.join(", ")}</p>
    <h3>String Array:</h3>
    <p>${stringArray.join(", ")}</p>
    <h3>Object Array:</h3>
    <p>${objectArray.map(obj => obj.name).join(", ")}</p>
`;

console.assert(numericArray.length === 7, "Error: El tamaño del array numérico no es correcto.");
console.assert(stringArray.length === 5, "Error: El tamaño del array de strings no es correcto.");
console.assert(objectArray.length === 5, "Error: El tamaño del array de objetos no es correcto.");

console.log("Todos los arrays se han actualizado correctamente.");
