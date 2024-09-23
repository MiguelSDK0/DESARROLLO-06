function convertirTemperatura() {
    const tempInput = document.getElementById("temperaturaInput").value;
    const escConversion = document.getElementById("escalaConversion").value;
    if (tempInput === "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }    
    const temperatura = parseFloat(tempInput);
    let resultado;

    if (escConversion === "celsiusFahrenheit") {
        resultado = (temperatura * 9/5) + 32;
        alert(`${temperatura} grados Celsius es igual a ${resultado} grados Fahrenheit`);
    } else if (escConversion === "fahrenheitCelsius") {
        resultado = (temperatura - 32) * 5/9;
        alert(`${temperatura} grados Fahrenheit es igual a ${resultado} grados Celsius`);
    }
}
