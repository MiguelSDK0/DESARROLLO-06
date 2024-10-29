<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carga de Archivos por Especialidad</title>
</head>
<body>
    <h1>Carga de Archivos por Especialidad</h1>

    <form action="index.php" method="POST" enctype="multipart/form-data">
        <label for="file">Selecciona un archivo:</label>
        <input type="file" name="archivo" required><br><br>

        <label for="especialidad">Selecciona la especialidad:</label>
        <select name="especialidad" required>
            <option value="Estadistica">Estadística</option>
            <option value="DesarrolloWeb">Desarrollo Web</option>
            <option value="Testing">Testing</option>
        </select><br><br>

        <button type="submit" name="subir">Subir Archivo</button>
    </form>

    <h2>Archivos por Especialidad</h2>
    <ul>
        <li><a href="ver_archivo.php?especialidad=Estadistica">Estadística</a></li>
        <li><a href="ver_archivo.php?especialidad=DesarrolloWeb">Desarrollo Web</a></li>
        <li><a href="ver_archivo.php?especialidad=Testing">Testing</a></li>
    </ul>

    <?php
    if (isset($_POST['subir'])) {
        $especialidad = $_POST['especialidad'];
        $archivo = $_FILES['archivo'];

        $directorio = "uploads/$especialidad/";
        if (!file_exists($directorio)) {
            mkdir($directorio, 0777, true);
        }

        $destino = $directorio . basename($archivo['name']);
        if (move_uploaded_file($archivo['tmp_name'], $destino)) {
            echo "<p>Archivo subido exitosamente.</p>";
        } else {
            echo "<p>Error al subir el archivo.</p>";
        }
    }
    ?>
</body>
</html>
