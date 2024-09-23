const numericArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry"];
const objectArray = [{name: "John"}, {name: "Jane"}, {name: "Doe"}];

numericArray.push(6);
console.log("Numeric Array después de push:", numericArray);

numericArray.pop();
console.log("Numeric Array después de pop:", numericArray);

numericArray.shift();
console.log("Numeric Array después de shift:", numericArray);

numericArray.unshift(0);
console.log("Numeric Array después de unshift:", numericArray);

numericArray.reverse();
console.log("Numeric Array después de reverse:", numericArray);

stringArray.sort();
console.log("String Array después de sort:", stringArray);

const joinedStringArray = stringArray.join(", ");
console.log("String Array después de join:", joinedStringArray);

stringArray.splice(1, 0, "blueberry", "date");
console.log("String Array después de splice (insertar):", stringArray);

stringArray.splice(2, 1);
console.log("String Array después de splice (eliminar):", stringArray);

objectArray.push({name: "Smith"});
console.log("Object Array después de push:", objectArray);

const filteredObjectArray = objectArray.filter(obj => obj.name.startsWith("J"));
console.log("Object Array después de filter:", filteredObjectArray);

const namesArray = objectArray.map(obj => obj.name);
console.log("Array de nombres después de map:", namesArray);

const foundObject = objectArray.find(obj => obj.name === "Doe");
console.log("Objeto encontrado con find:", foundObject);

const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = `
    <h3>Numeric Array:</h3>
    <p>${numericArray.join(", ")}</p>
    <h3>String Array:</h3>
    <p>${stringArray.join(", ")}</p>
    <h3>Object Array:</h3>
    <p>${objectArray.map(obj => obj.name).join(", ")}</p>
    <h3>Filtered Object Array (Names starting with 'J'):</h3>
    <p>${filteredObjectArray.map(obj => obj.name).join(", ")}</p>
    <h3>Names Array:</h3>
    <p>${namesArray.join(", ")}</p>
    <h3>Found Object:</h3>
    <p>${foundObject ? foundObject.name : 'Not Found'}</p>
`;

console.assert(numericArray.length === 6, "Error: El tamaño del array numérico no es correcto.");
console.assert(stringArray.length === 4, "Error: El tamaño del array de strings no es correcto.");
console.assert(objectArray.length === 4, "Error: El tamaño del array de objetos no es correcto.");
console.assert(filteredObjectArray.length === 2, "Error: La longitud del array filtrado no es correcta.");
console.assert(namesArray.length === 4, "Error: La longitud del array de nombres no es correcta.");
console.assert(foundObject !== undefined, "Error: No se encontró el objeto con el nombre 'Doe'.");

console.log("Todos los arrays se han manipulado correctamente.");
