<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivos de Especialidad</title>
</head>
<body>
    <h1>Archivos de <?php echo $_GET['especialidad']; ?></h1>
    <ul>
        <?php
        $especialidad = $_GET['especialidad'];
        $directorio = "uploads/$especialidad/";

        if (is_dir($directorio)) {
            $archivos = scandir($directorio);
            foreach ($archivos as $archivo) {
                if ($archivo !== "." && $archivo !== "..") {
                    echo "<li><a href='$directorio$archivo' target='_blank'>$archivo</a></li>";
                }
            }
        } else {
            echo "<p>No hay archivos en esta especialidad.</p>";
        }
        ?>
    </ul>

    <a href="index.php">Volver a la página principal</a>
</body>
</html>
