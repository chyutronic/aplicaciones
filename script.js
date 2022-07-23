// código para usar la ventana modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');


// arreglo que contiene las respuestas con combinaciones posibles
let op1 = ["1", "1", "1"];
let op2 = ["2", "2", "2"];
let op3 = ["3", "3", "3"];
let op4 = ["1", "2", "3"];
let op5 = ["3", "2", "1"];


// arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];


// función que toma el número de pregunta y el imput elegido de esa pregunta
function respuesta(numPregunta, seleccionada){

    opcionElegida.splice(numPregunta,0,seleccionada.value);

}// fin método respuesta


// función que toma las respuestas y lo compara con los arreglos con combinaciones posibles y entrega el vino correcto
function consultar(){

    if(JSON.stringify(op1) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container.classList.add('show');
        });
    }
    else if(JSON.stringify(op2) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO NEGRO...!");
        location.reload();
        window.scrollTo(0, 0);
    }
    else if(JSON.stringify(op3) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO AZUL...!");
        location.reload();
        window.scrollTo(0, 0);
    }
    else if(JSON.stringify(op4) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO ROJO...!");
        location.reload();
        window.scrollTo(0, 0);
    }
    else if(JSON.stringify(op5) === JSON.stringify(opcionElegida)){
        alert("Tu vino perfecto es GATO AMARILLO...!");
        location.reload();
        window.scrollTo(0, 0);
    }
    else{
        alert("Opción no reconocida. Vuelve a intentarlo..!")
        location.reload();
        window.scrollTo(0, 0);
    }
    
    // console.log(opcionElegida);

    // location.reload();
    // window.scrollTo(0, 0);
    
}// fin método consultar


close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    location.reload();
    window.scrollTo(0, 0);
});








