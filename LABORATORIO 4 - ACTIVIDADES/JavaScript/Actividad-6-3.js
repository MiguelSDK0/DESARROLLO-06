function showNumberProperties() {
    let properties = `
        <h3>Propiedades del Objeto Number:</h3>
        <ul>
            <li><strong>MAX_VALUE:</strong> ${Number.MAX_VALUE}</li>
            <li><strong>MIN_VALUE:</strong> ${Number.MIN_VALUE}</li>
            <li><strong>NaN:</strong> ${Number.NaN}</li>
            <li><strong>NEGATIVE_INFINITY:</strong> ${Number.NEGATIVE_INFINITY}</li>
            <li><strong>POSITIVE_INFINITY:</strong> ${Number.POSITIVE_INFINITY}</li>
            <li><strong>EPSILON:</strong> ${Number.EPSILON}</li>
            <li><strong>MAX_SAFE_INTEGER:</strong> ${Number.MAX_SAFE_INTEGER}</li>
            <li><strong>MIN_SAFE_INTEGER:</strong> ${Number.MIN_SAFE_INTEGER}</li>
        </ul>
    `;

    document.getElementById("results").innerHTML = properties;

    const num = 12345.6789;
    const exponential = num.toExponential(2);
    console.log(`Notación Exponencial (2 decimales): ${exponential}`);

    const fixed = num.toFixed(3);
    console.log(`Número con 3 decimales (toFixed): ${fixed}`);

    const precision = num.toPrecision(5);
    console.log(`Número con precisión de 5 dígitos (toPrecision): ${precision}`);

    const isFiniteCheck = Number.isFinite(123);
    console.log(`Es 123 un número finito (isFinite): ${isFiniteCheck}`);

    const isNaNCheck = Number.isNaN(NaN);
    console.log(`Es NaN un número (isNaN): ${isNaNCheck}`);

    let methodsResults = `
        <h3>Resultados de Métodos del Objeto Number:</h3>
        <ul>
            <li><strong>Notación Exponencial (2 decimales):</strong> ${exponential}</li>
            <li><strong>Número con 3 Decimales (toFixed):</strong> ${fixed}</li>
            <li><strong>Número con Precisión de 5 Dígitos (toPrecision):</strong> ${precision}</li>
            <li><strong>Es 123 un Número Finito (isFinite):</strong> ${isFiniteCheck}</li>
            <li><strong>Es NaN un Número (isNaN):</strong> ${isNaNCheck}</li>
        </ul>
    `;

    document.getElementById("results").innerHTML += methodsResults;
}
