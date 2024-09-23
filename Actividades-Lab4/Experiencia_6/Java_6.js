//a) USO DE OBJETO WINDOW
function mostrarPropiedadesWindow() {
    console.log("Propiedades del objeto Window:");
    for (let prop in window) {
        console.log(prop);
    }
    alert("¡Bienvenido a la práctica de uso de objetos globales!");
    console.log("Ubicación actual:", window.location.href);
}
mostrarPropiedadesWindow();

//b) USO DEL OBJETO ARRAY 
function mostrarPropiedadesArray() {
    console.log("Propiedades del objeto Array:");
    for (let prop in Array) {
        console.log(prop);
    }
    let ejemploArray = [1, 2, 3, 4, 5];
    console.log("Array original:", ejemploArray);
    console.log("Array invertido:", ejemploArray.reverse());
}
mostrarPropiedadesArray();

//c) USO DE OBJETO NUMBER
function mostrarPropiedadesNumber() {
    console.log("Propiedades del objeto Number:");
    for (let prop in Number) {
        console.log(prop);
    }
    let num = 42;
    console.log("Número original:", num);
    console.log("Número como cadena:", Number(num).toString());
}
mostrarPropiedadesNumber();
