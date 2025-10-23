const NUMERO_SECRETARIA = "5491122334455";
const APROBACION_AUTOMATICA = false;

// TEMAS (array literal)
const TEMAS = [
    "Torta de cumpleaños",
    "Torta de boda",
    "Torta infantil",
    "Torta temática",
    "Torta sin azúcar"
];

function pedirDatosCliente() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const empresa = prompt("¿De qué empresa o familia sos?");
    const dia = prompt("Ingresá el día de la reunión (formato AAAA-MM-DD):");
    const hora = prompt("Ingresá la hora (HH:MM):");
    return { nombre, empresa, dia, hora };
}

function elegirTemas() {
    console.log("TEMAS DISPONIBLES");
    for (let i = 0; i < TEMAS.length; i++) {
        console.log("${i + 1}. ${TEMAS[i]}");
    } 

    const seleccion = prompt("Elegí los números de los temas separados por coma (ej: 1,3):");
    const indices = seleccion.split(",").map(s => parseInt(s.trim(), 10));
    const elegidos = indices.filter(i => i >= 1 && i <= TEMAS.length).map(i => TEMAS[i - 1]);
    return elegidos;
}

function construirMensaje(datos, temas) {
    const listaTemas = temas.join(", ");
    const mensaje = `Hola, soy ${datos.nombre} de ${datos.empresa}.
    Quisiera coordinar una reunión el ${datos.dia} a las ${datos.hora}.
    Temas de interés: ${listaTemas}.

    A la espera de confirmación de la misma.`;
    return mensaje;
}

alert("Bienvenido al simulador de reservas de Empresa de Tortas");

const datos = pedirDatosCliente();
const temasSeleccionados = elegirTemas();

if (temasSeleccionados.length === 0) {
    alert("No seleccionaste ningún tema. Nos vemos la próxima!.");
    } 
    else {
    const mensaje = construirMensaje(datos, temasSeleccionados);
    console.log("MENSAJE DE WHATSAPP:\n" + mensaje);
    alert("Mensaje listo para enviar:\n\n" + mensaje);


alert("Gracias por participar!"); }