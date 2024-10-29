<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $direccion = mysqli_real_escape_string($conn, $_POST['direccion']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirm_password = mysqli_real_escape_string($conn, $_POST['confirm_password']);

    if ($password != $confirm_password) {
        die("Las contraseñas no coinciden");
    }

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $dia = $_POST['dia'];
    $mes = $_POST['mes'];
    $anio = $_POST['anio'];
    $fecha_nacimiento = $anio . '-' . $mes . '-' . $dia;

    $sexo = $_POST['sexo'];

    $intereses = isset($_POST['intereses']) ? implode(", ", $_POST['intereses']) : '';

    $aficiones = isset($_POST['aficiones']) ? implode(", ", $_POST['aficiones']) : '';

    $sql = "INSERT INTO usuarios (nombre_completo, direccion, correo_electronico, contrasena, fecha_nacimiento, sexo, temas_interes, aficiones) 
            VALUES ('$nombre', '$direccion', '$correo', '$hashed_password', '$fecha_nacimiento', '$sexo', '$intereses', '$aficiones')";

    if ($conn->query($sql) === TRUE) {
        header("Location: confirmacion.php?nombre=$nombre&direccion=$direccion&correo=$correo&sexo=$sexo&fecha_nacimiento=$fecha_nacimiento&intereses=$intereses&aficiones=$aficiones");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
