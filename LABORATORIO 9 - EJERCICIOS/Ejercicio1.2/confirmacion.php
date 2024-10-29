<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Pagina de confirmacion del registro de usuario</h2>
    <table border="1">
        <tr>
            <td>Nombre completo</td>
            <td><?php echo htmlspecialchars($_GET['nombre']); ?></td>
        </tr>
        <tr>
            <td>Direccion</td>
            <td><?php echo htmlspecialchars($_GET['direccion']); ?></td>
        </tr>
        <tr>
            <td>Correo electronico</td>
            <td><?php echo htmlspecialchars($_GET['correo']); ?></td>
        </tr>
        <tr>
            <td>Sexo</td>
            <td><?php echo htmlspecialchars($_GET['sexo']); ?></td>
        </tr>
        <tr>
            <td>Fecha de nacimiento</td>
            <td><?php echo htmlspecialchars($_GET['fecha_nacimiento']); ?></td>
        </tr>
        <tr>
            <td>Temas de interes</td>
            <td><?php echo htmlspecialchars($_GET['intereses']); ?></td>
        </tr>
        <tr>
            <td>Aficiones</td>
            <td><?php echo htmlspecialchars($_GET['aficiones']); ?></td>
        </tr>
    </table>
</body>
</html>
