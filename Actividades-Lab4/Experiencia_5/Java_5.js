const numericArray = [1, 2, 3, 4, 5];
console.log(numericArray);

const stringArray = ["manzana", "banana", "cereza"];
console.log(stringArray);

const objectArray = [{ name: "Juan" }, { name: "Ana" }, { name: "Doe" }];
console.log(objectArray);

numericArray.push(6, 7);
console.log(numericArray);

stringArray.push("fecha", "mora");
console.log(stringArray);

objectArray.push({ name: "Smith" }, { name: "Alicia" });
console.log(objectArray);

const resultsDiv = document.getElementById("resultado");
resultsDiv.innerHTML = `
    <h3>Arreglo numerico:</h3>
    <p>${numericArray.join(", ")}</p>
    <h3>Arreglo de cadenas:</h3>
    <p>${stringArray.join(", ")}</p>
    <h3>Arreglo de objetos:</h3>
    <p>${objectArray.map(obj => obj.name).join(", ")}</p>`;

numericArray.pop(); 
numericArray.shift(); 
numericArray.unshift(0); 
console.log("Arreglo numerico tras operaciones:", numericArray);

stringArray.splice(1, 1, "arándano");
console.log("Arreglo de cadenas tras operaciones:", stringArray);

objectArray.sort((a, b) => a.name.localeCompare(b.name));
console.log("Arreglo de objetos ordenado:", objectArray); 

const filteredArray = objectArray.filter(obj => obj.name.startsWith("J"));
console.log("Arreglo filtrado (inicia con 'J'):", filteredArray);

resultsDiv.innerHTML += `
    <h3>Acciones en el arreglo numerico:</h3>
    <p>${numericArray.join(", ")}</p>
    <h3>Arreglo de cadenas actualizado:</h3>
    <p>${stringArray.join(", ")}</p>
    <h3>Arreglo de objetos ordenado:</h3>
    <p>${objectArray.map(obj => obj.name).join(", ")}</p>
    <h3>Arreglo filtrado ('J'):</h3>
    <p>${filteredArray.map(obj => obj.name).join(", ")}</p>`;

numericArray.forEach((num) => {
    console.log(`Número: ${num}`);
});

const squaredNumbers = numericArray.map(num => num ** 2);
console.log("Números al cuadrado:", squaredNumbers);

const evenNumbers = numericArray.filter(num => num % 2 === 0);
console.log("Números pares:", evenNumbers);

const sum = numericArray.reduce((acc, num) => acc + num, 0);
console.log("Suma de números:", sum);

resultsDiv.innerHTML += `
    <h3>Resultados de iteradores:</h3>
    <h4>Numeros al cuadrado:</h4>
    <p>${squaredNumbers.join(", ")}</p>
    <h4>Numeros pares:</h4>
    <p>${evenNumbers.join(", ")}</p>
    <h4>Suma de numeros:</h4>
    <p>${sum}</p>`;
