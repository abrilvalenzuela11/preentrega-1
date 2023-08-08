/**ENCUESTA */
let nombre = prompt ("Ingrese su nombre")
alert("Hola " + nombre + ", bienvenido a esta breve encuesta de salud y alimentación.")

let i = 3
let fin = false

do{
    const pregunta1 = prompt ("¿Cuantos litros de agua consumes al día?")
    const pregunta2 = prompt ("¿Prefieres cocinar en casa o comer fuera?")
    const pregunta3 = prompt ("¿Sigues alguna restricción dietética específica (vegetarianismo, veganismo, sin gluten, etc.?")

    let cambio = prompt("Eso es todo, ¿desea modificar sus respuesta? (si/no)")
    let siCambio = "si"

    if(siCambio != cambio){
        alert("Tus respuestas han sido registradas con éxito ¡Gracias por tu colaboración!")
    } 
    else{
        alert("De acuerdo, se mostrarán nuevamente las preguntas")
        fin = true
        i = i - 1
    }
} while(i > 0 && fin == true)