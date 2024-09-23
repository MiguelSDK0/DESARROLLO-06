function mostrarDatos(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const carrera = document.getElementById('carrera').value;
    alert(`Nombre: ${nombre}\nApellidos: ${apellidos}\nCarrera: ${carrera}`);
}