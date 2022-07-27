<?php
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
    echo "The email message was sent.";
    header("Location: http://www.suculenta.cl/app_5/");

?>

