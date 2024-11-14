const fs = require('fs');
fs.readFile('archivo.txt', 'utf8', (err, data) => {
 if (err) {
 console.error("Error al leer el archivo:", err);
 return;
 }
 console.log("Contenido del archivo:", data);
 fs.writeFile('archivo_nuevo.txt', data, (err) => {
 if (err) {
 console.error("Error al escribir el archivo:", err);
 return;
 }
 console.log("Se creó el archivo 'archivo_nuevo.txt'.");
 });
});