function contrasena() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var mayusculas = document.getElementById("mayusculas").checked;
    var minusculas = document.getElementById("minusculas").checked;
    var numeros = document.getElementById("numeros").checked;
    var simbolos = document.getElementById("simbolos").checked;

    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const nros = "0123456789";
    const simb = "!@#$%^&*()_+[]{}|;:',.<>/?";

    var contrasena = "";
    var aleatorio;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Ingrese una cantidad válida');
        return;
    }

    var caracteres = "";

    if (mayusculas) {
        caracteres += mayus;
    }
    if (minusculas) {
        caracteres += minus;
    }
    if (numeros) {
        caracteres += nros;
    }
    if (simbolos) {
        caracteres += simb;
    }

    if (caracteres === "") {
        alert('Seleccione al menos un tipo de carácter');
        return;
    }

    for (var i = 0; i < cantidad; i++) {
        aleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[aleatorio];
    }

    document.getElementById("resultado").textContent = "Contraseña generada: " + contrasena;
}
