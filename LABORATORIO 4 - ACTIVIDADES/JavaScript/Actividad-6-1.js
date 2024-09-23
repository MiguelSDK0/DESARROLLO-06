function showWindowProperties() {
    let properties = `
        <h3>Propiedades del Objeto Window:</h3>
        <ul>
            <li><strong>Inner Width:</strong> ${window.innerWidth}</li>
            <li><strong>Inner Height:</strong> ${window.innerHeight}</li>
            <li><strong>Outer Width:</strong> ${window.outerWidth}</li>
            <li><strong>Outer Height:</strong> ${window.outerHeight}</li>
            <li><strong>URL:</strong> ${window.location.href}</li>
            <li><strong>Protocolo:</strong> ${window.location.protocol}</li>
            <li><strong>Nombre del Dominio:</strong> ${window.location.hostname}</li>
            <li><strong>Pathname:</strong> ${window.location.pathname}</li>
            <li><strong>Host:</strong> ${window.location.host}</li>
            <li><strong>Historial de Navegación:</strong> ${window.history.length}</li>
            <li><strong>Idioma del Navegador:</strong> ${window.navigator.language}</li>
            <li><strong>Plataforma del Navegador:</strong> ${window.navigator.platform}</li>
        </ul>
    `;

    document.getElementById("results").innerHTML = properties;

    alert(`Tamaño de la ventana interna: ${window.innerWidth} x ${window.innerHeight}`);

    if (confirm("¿Deseas ir a Google?")) {
        window.open("https://www.google.com", "_blank");
    } else {
        console.log("Redirección cancelada.");
    }

    const userName = prompt("Por favor, ingresa tu nombre:");
    if (userName) {
        alert(`¡Hola, ${userName}! Bienvenido a la demostración del objeto Window.`);
    } else {
        console.log("El usuario no ingresó su nombre.");
    }
}