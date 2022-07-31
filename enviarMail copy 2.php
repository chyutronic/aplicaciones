<?php

    //INICIO código para enviar el correo al usuario

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "test@gatonegro.suculenta.cl";
    $to = $_POST['email'];
    $subject = "Gracias por celebrar tu sabor..!";
    $message = 
    '
    <html> 
    <head> 
    <title>Te enviamos tu cepa</title> 
    </head> 
    <body> 
    <h1>Hola!</h1> 
    <p> 
    <b>Bienvenidos a Gato Negro</b>. Gracias por usar nuestra aplicación..! Tu opción elegida es:
    <img class="botella_premio" src="http://wwww.suculenta.cl/app_5/img_botellas/fondo_cs.jpg"/>
    </p> 
    </body> 
    </html> 
    '; 

    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers.= 'Bcc: jose@suculenta.cl' . "\r\n";
    $headers.= "From:" . $from;

    mail($to,$subject,$message, $headers);
    // echo "The email message was sent.";

    //FIN código para enviar el correo al usuario
    


    //INICIO código para insertar dato en base de datos

    $db_host = "72.167.68.184"; //dirección servidor base de datos
    $db_nombre = "APPENCUESTAVINOS"; //nombre de la base de datos
    $db_usuario = "chyutronic"; //nombre del usuario
    $db_contrasena = "brother2022!"; //contrasena

    $conexion = mysqli_connect($db_host, $db_usuario, $db_contrasena, $db_nombre);


    $date = date('Y-m-d');
    $ingreso = "INSERT INTO consultas_realizadas VALUES ('$date', '$to', 'CS');";


    // VALUES ('{$_POST[nombre]}', '{$_POST[mail]}');"



    mysqli_query($conexion, $ingreso);

    //FIN código para insertar dato en base de datos

    header("Location: http://gatonegro.suculenta.cl");

?>

