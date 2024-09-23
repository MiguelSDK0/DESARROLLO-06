let variableDeBloque = null;
const constanteDeBloque = null;
{
    let variableDeBloque = "Estoy dentro del bloque";
    const constanteDeBloque = "Soy una constante dentro del bloque";

    console.log(variableDeBloque);
    console.log(constanteDeBloque);
}

try {
    console.log(variableDeBloque);
} catch (error) {
    console.error("Error: variableDeBloque no está definida fuera del bloque");
}

try {
    console.log(constanteDeBloque);
} catch (error) {
    console.error("Error: constanteDeBloque no está definida fuera del bloque");
}