<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


<?php

    $db_host = "72.167.68.184"; //dirección servidor base de datos
    $db_nombre = "APPENCUESTAVINOS"; //nombre de la base de datos
    $db_usuario = "chyutronic"; //nombre del usuario
    $db_contrasena = "brother2022!"; //contrasena

    $conexion = mysqli_connect($db_host, $db_usuario, $db_contrasena, $db_nombre);

    $ingreso = "INSERT INTO consultas_realizadas VALUES ('NOW()', $to, 'CS');";

    mysqli_query($conexion, $ingreso);

    // $fila = mysqli_fetch_row($resultados);

    // echo $fila[0] . " ";
    // echo $fila[1] . " ";
    // echo $fila[2] . " ";

?>


</body>
</html>

