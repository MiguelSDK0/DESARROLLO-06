function showArrayProperties() {
    const exampleArray = [10, 20, 30, 40, 50];

    let properties = `
        <h3>Propiedades del Objeto Array:</h3>
        <ul>
            <li><strong>Length:</strong> ${exampleArray.length}</li>
            <li><strong>Primero:</strong> ${exampleArray[0]}</li>
            <li><strong>Último:</strong> ${exampleArray[exampleArray.length - 1]}</li>
            <li><strong>Tipo de Variable:</strong> ${Array.isArray(exampleArray)}</li>
        </ul>
    `;

    document.getElementById("results").innerHTML = properties;

    exampleArray.push(60);
    console.log("Después de push:", exampleArray);

    const removedElement = exampleArray.pop();
    console.log("Después de pop (Elemento removido):", removedElement, exampleArray);

    const foundElement = exampleArray.find(num => num > 25);
    console.log("Primer elemento mayor a 25 (find):", foundElement);

    const allGreaterThanFive = exampleArray.every(num => num > 5);
    console.log("Todos los elementos son mayores a 5 (every):", allGreaterThanFive);

    const doubledArray = exampleArray.map(num => num * 2);
    console.log("Array con cada elemento multiplicado por 2 (map):", doubledArray);

    let methodsResults = `
        <h3>Resultados de Métodos del Objeto Array:</h3>
        <ul>
            <li><strong>Array Después de push(60):</strong> ${exampleArray.join(", ")}</li>
            <li><strong>Array Después de pop():</strong> ${exampleArray.join(", ")}</li>
            <li><strong>Primer Elemento Mayor a 25 (find):</strong> ${foundElement}</li>
            <li><strong>Todos los Elementos Mayores a 5 (every):</strong> ${allGreaterThanFive}</li>
            <li><strong>Array Multiplicado por 2 (map):</strong> ${doubledArray.join(", ")}</li>
        </ul>
    `;

    document.getElementById("results").innerHTML += methodsResults;
}