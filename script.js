// arreglo que contiene las respuestas con combinaciones posibles
let op1 = ["1", "1", "1"];
let op2 = ["2", "2", "2"];
let op3 = ["3", "3", "3"];
let op4 = ["1", "2", "3"];
let op5 = ["3", "2", "1"];


// arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];


// función que toma el número de pregunta y el imput elegido para esa pregunta
function respuesta(numPregunta, seleccionada){

    opcionElegida.splice(numPregunta,0,seleccionada.value);

}// fin método respuesta0


// función que toma las respuestas y lo compara con los arreglos con combinaciones posibles y entrega el vino correcto
function consultar(){

    if(JSON.stringify(op1) === JSON.stringify(opcionElegida)){
        window.open("op1.html");
    }
    else if(JSON.stringify(op2) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO NEGRO...!");
    }
    else if(JSON.stringify(op3) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO AZUL...!");
    }
    else if(JSON.stringify(op4) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO ROJO...!");
    }
    else if(JSON.stringify(op5) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO AMARILLO...!");
    }
    else{
        alert("Opción no reconocida. Vuelve a intentarlo..!")
    }
    
    // console.log(opcionElegida);

    location.reload();

}// fin método consultar

