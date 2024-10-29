<?php
include 'conexion.php';

function calcularEdad($dia, $mes, $anio) {
    $fecha_actual = new DateTime();
    $fecha_nacimiento = new DateTime("$anio-$mes-$dia");
    $edad = $fecha_actual->diff($fecha_nacimiento);
    return $edad->y;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $dia = $_POST['dia'];
    $mes = $_POST['mes'];
    $anio = $_POST['anio'];
    $fecha_nacimiento = "$anio-$mes-$dia";
    $precio_original = floatval($_POST['precio']);

    $edad = calcularEdad($dia, $mes, $anio);

    if ($edad >= 18) {
        $precio_final = $precio_original;
        $tipo_pasajero = "Adulto";
    } elseif ($edad >= 2 && $edad < 18) {
        $precio_final = $precio_original * 0.75;
        $tipo_pasajero = "Menor de edad";
    } else {
        $precio_final = 0;
        $tipo_pasajero = "Infante";
    }

    $sql = "INSERT INTO ventas_pasajes (nombre, fecha_nacimiento, precio_original, precio_final, tipo_pasajero) 
            VALUES ('$nombre', '$fecha_nacimiento', $precio_original, $precio_final, '$tipo_pasajero')";

    if ($conn->query($sql) === TRUE) {
        echo "<h2>Registro de pasaje exitoso</h2>";
        echo "<p>Nombre: $nombre</p>";
        echo "<p>Fecha de nacimiento: $fecha_nacimiento</p>";
        echo "<p>Edad: $edad años</p>";
        echo "<p>Tipo de pasajero: $tipo_pasajero</p>";
        echo "<p>Precio original: S/ " . number_format($precio_original, 2) . "</p>";
        echo "<p>Precio final del pasaje: S/ " . number_format($precio_final, 2) . "</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
